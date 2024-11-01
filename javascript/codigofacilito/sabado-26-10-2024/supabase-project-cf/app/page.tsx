"use client"
import { useState } from "react" ; 
import FirstSCWSupabase from "./components/SCWSupabase";

type User = {
  id:number,
  first_name: string,
  last_name: string,
  age: number,
  created_at: string,
 
}


const  Index = () => {
  const [formValues, setFormValues] = useState<User[]>([]);

  function handleFormAction(e:any){
    // e.preventDefault()
    const formData =  new FormData(document.forms[0]);
    const nombre = formData.get("nombre");
    console.log(nombre)
  }
  return (
    <>
   
      <main className="flex-1 flex flex-col gap-6 px-4">
        <h4>Lista de usuarios</h4>
        <form action={handleFormAction}>
          <input 
          type="text" 
          placeholder="Buscar por nombre" 
          name="nombre" 
          />
          <button type="submit">enviar</button>
        </form>
      </main>
    </>
  );
}


export default Index;