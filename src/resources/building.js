import firestore from '@/helpers/firebase'
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore'

export default {
  async fetch () {
    console.log('firestore', firestore)
    return await getDocs(collection(firestore, 'buildings'))
  },
  async update (building, status) {
    return await updateDoc(doc(firestore, 'buildings', building.id), {
      record_status: status
    })
  }
}
