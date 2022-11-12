export const login=(deta)=>(
    console.log(deta,"dafadf"),{
type:"logins",
payload:deta
})
export const signuped=(data)=>({
   type:"signup",
   payload:data 
})
export const logout=()=>({
    type:"logouts",
    payload:{}
})