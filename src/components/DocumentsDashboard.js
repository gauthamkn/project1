import React, {useState, useEffect} from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../Firebase/FirebaseInit';

const DocumentsDashboard = () => {
  
  const [items, setItems] = useState([]);
  
  const get_queries = async () => {
    console.log("get queries")
    const querySnapshot = await getDocs(collection(db, "documents"));
    const queryResult = []
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    const newObject = {...doc.data(), id: doc.id}
    queryResult.push(newObject)
    });
    setItems(queryResult)
  }

  useEffect(() => {
    console.log("use effect")
    get_queries().then(()=> {console.log("its done")})
  }, [])
  
    
  return (
    <div>{items.map((obj) => {
        return <div>
            {obj.name}
        </div>
    })}</div>
  )
}

export default DocumentsDashboard;