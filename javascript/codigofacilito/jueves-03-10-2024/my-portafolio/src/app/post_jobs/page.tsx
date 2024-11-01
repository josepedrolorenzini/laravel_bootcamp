import AddForm from '../components/AddForm/AddForm';

function PostJobs() {

     const onHandleSubmit = async (formData:FormData) => {
     'use server';
     // Simulate server request using fetch API

     // console.log('form submitted');
      let body = {
        person: formData.get('person'),
        address: formData.get('address'),
      
      }
      if(body.person == "" || body.address == ""){
        alert("Please fill all fields");
        return;
      }else{
       console.log(body);
      }


      return {message : "formulario enviado"}
    }

  return (
    <>
    post jobs
    <AddForm  sendForm={onHandleSubmit}/>
    </>
    
    
  )
}

export default PostJobs