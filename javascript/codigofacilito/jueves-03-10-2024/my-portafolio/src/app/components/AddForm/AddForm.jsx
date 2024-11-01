'use client';
import { useActionState, useState } from "react"


function AddForm({sendForm}) {
    const [estado , setState] = useState(true) ; 
  //  const [state, formAction] = useActionState(sendForm, {message: null}) ;

    // const [state,formAction] = useActionState(sendForm , {
    //     message:null
    // }) ; 
    
    const handleChange = (e) => {
       // formAction.set(e.target.name, e.target.value)
       console.log(e.target.value)
    }

  return (
    <>
    AddForm
    <form action={sendForm}>
      <label>Nombre de la persona</label><br></br>
      <input
        type="text"
        id="person"
        name="person"
        placeholder="nombre"
        onChange={handleChange}
       
      /><br></br>
      <label>Dirección</label><br></br>
      <input
        type="text"
        name="address"
        id="address"
        placeholder="address"
      
      /><br></br>
      <button type="submit" className="bg-emerald-500 hover:bg-sky-700">Enviar</button>
    </form>
    {/* {estado && state.message} */}
    </>
  )
}

export default AddForm