import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import firebaseConfig from '@/config/firebase'

const firebase = initializeApp(firebaseConfig)
const firestore = getFirestore(firebase)

export default firestore
