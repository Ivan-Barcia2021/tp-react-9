import React from 'react'
const Contenido=()=>{
  const[personas, setpersonas]=React.useState(null)
  React.useEffect(()=>{
    obtenerPosteos()
  }
  )
  const obtenerPosteos=async()=>{
    const data=await fetch("https://dummyapi.io/data/v1/post/6175a4c26d062c84925f986e")
    //la url no es correcta
    const users=await data.json();
    console.log(users)
  setpersonas(users)
  }
  return(
<div>
  <h1>Post</h1>
  <ul>
    {
      users.map(item=> (
        <li key="item.id"> </li>
      ))
    }
  </ul>
  </div>
  )

}
export default Contenido