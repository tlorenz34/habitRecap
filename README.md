# Habit Recap

## Export Data

To export data, the static site calls the url with the desired uniqueUser
- Local development: `http://127.0.0.1:5001/flow-61e6d/us-central1/exportData?uniqueUser=123`
- Production: `https://us-central1-flow-61e6d.cloudfunctions.net/exportData?uniqueUser=5JP7431MYTWSHROKqPmQVXZSBv63`

The data is returned as a CSV file in JSON.