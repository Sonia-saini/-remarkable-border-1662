export const addtocart=(data)=>(
    {
type:"add",
payload:data}
)
export const removed=(id)=>({
    type:"remove",
    payload:id
    })

export const checkouted=()=>({
    type:"checkout"
})