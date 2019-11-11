
# Pulsara Patient Server

Jason Jerome Candidate Project - Patient Sync

A basic endpoint that returns a list of patients.

The server is backed by a sqlite database. If the database file is deleted, the server will re-create it.

## Dependencies
* node.js
* npm


## Getting Started
* run all commands from project root

Install dependencies:
```
npm install
```

To start:
```
npm run start
```

## Example usage
```
curl --request GET --url 'localhost:8000/api/v1/patients'
```
