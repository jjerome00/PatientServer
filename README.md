
# Patient Server

A basic demo of a node endpoint that returns a list of patients. It's meant to work with an Android app (also written by me). You can see the Android app here: https://github.com/jjerome00/PatientSyncAndroid 

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
