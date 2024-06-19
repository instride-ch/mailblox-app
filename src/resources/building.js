import firestore from '@/helpers/firebase'
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore'

export default {
  async fetch () {
    return await getDocs(collection(firestore, 'buildings'))
  },
  async update (building) {
    return await updateDoc(doc(firestore, 'buildings', building.id), {
      record_status: 'complete'
    })
  }
}
