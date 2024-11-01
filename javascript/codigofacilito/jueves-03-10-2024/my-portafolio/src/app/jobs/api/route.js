export async function GET(request){
    let res = await fetch("http://localhost:8000/jobs" ,
        {
            headers: {
            'Content-Type': 'application/json',
            'API-Key': process.env.DATA_API_KEY,
          },
     }) 
    let data = await  res.json() ;
    if(!res.ok){
        throw new Error(`Error ${res.status}`)
    }
  
    return  Response.json({data})
}