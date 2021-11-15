// import { useState, useEffect } from "react"

function LoggedIn({facade}) {
    // const [dataFromServer, setDataFromServer] = useState("Loading...")
    
    // useEffect(() => {
    //     facade.fetchData('info/admin').then(data=> setDataFromServer(data.msg));
    // }, [facade])
   
    return (
      <div>
        <h2>Velkommen brug navbaren til at se dine muligheder </h2>
        {/* <h3>{dataFromServer}</h3> */}
      </div>
    )
   
  }
  export default LoggedIn;