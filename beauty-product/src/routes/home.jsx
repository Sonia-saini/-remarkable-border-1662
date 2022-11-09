export default function Home(){
    const Append=()=>{
fetch(`http://localhost:8000/products`).then((res)=>
     res.json()
).then((res)=>(
    console.log(res)
))
    }
    Append()
    return (
        <>home
        </>
    )
}