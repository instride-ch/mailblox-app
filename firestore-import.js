// Imports
const { initializeFirebaseApp, restore } = require('firestore-export-import')
const firebaseConfig = require('./src/config/firebase.js')
const serviceAccount = require('./service-account.json')
const fs = require('fs')
const { resolve } = require('path')
const tempFileName = resolve('./data-temp.json');

// procedure
(async () => {
  const fileContents = fs.readFileSync(resolve('./src/data/import.json'), 'utf8')
  const data = JSON.parse(fileContents)
  fs.writeFileSync(tempFileName, JSON.stringify(data))
  await jsonToFirestore()
  fs.unlinkSync(tempFileName)
})()

// Helper Functions
// -------------------------------------

// JSON To Firestore
async function jsonToFirestore () {
  try {
    console.log('Initializing Firebase')
    initializeFirebaseApp(serviceAccount)
    console.log('Firebase Initialized')

    await restore(tempFileName, {
      refs: ['addresses']
    })
    console.log('Upload Success')
  } catch (error) {
    console.log(error)
  }
}
