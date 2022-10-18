const functions = require("firebase-functions");

const admin = require("firebase-admin");
admin.initializeApp();

exports.exportData = functions.https.onRequest(async (req, res) => {
  // Allow CORS
  res.set('Access-Control-Allow-Origin', '*');

  // Grab the uniqueUser parameter
  const uniqueUser = req.query.uniqueUser;

  // Read all of the user's data
  const readResult = await admin.firestore().collection('entries').where("uniqueUser", "==", uniqueUser).get();

  // Prepare the data for export
  items = [];
  readResult.forEach(doc => {
    console.log(doc.id, '=>', doc.data());
    items.push(doc.data());
  });

  // Make sure data exists 
  if (items.length == 0) {
    res.json("no data exists")
    return
  }

  console.log('items', items);

  // Convert the items into CSV data
  const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
  const header = Object.keys(items[0])
  const csv = [
    header.join(','), // header row first
    ...items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
  ].join('\r\n')

  console.log(csv)

  // Send the CSV data to the website encoded as JSON data
  res.json(csv)
})