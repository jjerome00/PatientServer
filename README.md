
# Patient Server

Patient Server: A Jason Jerome Candidate Project

A basic endpoint that returns a list of patients.

The server is backed by a sqlite database. If the database file is deleted, the server will re-create it.

This was for a take-home assignment. The assignment was to write a simple web server to provide data to an Android app (also written by me).  You can see the Android app here: https://github.com/jjerome00/PatientSyncAndroid

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
