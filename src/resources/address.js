import firestore from '@/helpers/firebase'
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore'

export default {
  async fetch () {
    return await getDocs(collection(firestore, 'addresses'))
  },
  async update (address) {
    return await updateDoc(doc(firestore, 'addresses', address.id), {
      party_quantity: address.party_quantity
    })
  }
}
