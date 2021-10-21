import firestore from '@/helpers/firebase'
import { collection, getDocs } from 'firebase/firestore'

export default {
  async fetch () {
    return await getDocs(collection(firestore, 'buildings'))
  }
}
