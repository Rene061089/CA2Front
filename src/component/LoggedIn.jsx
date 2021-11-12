import { useState, useEffect } from "react"

function LoggedIn({facade}) {
    const [dataFromServer, setDataFromServer] = useState("Loading...")
    
    useEffect(() => {
        facade.fetchData().then(data=> setDataFromServer(data.msg));
    }, [facade])
   
    return (
      <div>
        <h2>Data Received from server</h2>
        <h3>{dataFromServer}</h3>
      </div>
    )
   
  }
  export default LoggedIn;