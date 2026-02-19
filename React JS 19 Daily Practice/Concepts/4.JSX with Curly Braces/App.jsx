export default function App(){
  //User Variable ----------------------------
  const name="Anil Sindhu";
//object ------------------------------------------
const userObj={
name:"Anil Sindhu",
email:"anil@test.com",
age:29
}
//Array ----------------------
const userArray=["Sam","Peter","Bruce"]
//Variable ---------------------------
  let x=10;
  let y=30;

  //function --------------------------
  function fruit(){
    return "Apple"
  }

  function sum(a,b){
    return a+b;
  }
//Operation Inside ------------------------------
function operation(a,b,op){
  if(op == "+"){
    return a+b;
  }else if (op == "-"){
    return a-b;
  }else{
    return a*b;
  }
}
//HTML Tag Property
let path="https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1728029523"


  return (
    <div>
   <h1>JSX with Curly Braces</h1>
   <h1>{name}</h1>
   
    {/* Ternary Operator*/}
    <h1>{name?name:"User Not Found"}</h1>
   <h1>{x+y}</h1>
   <h1>{fruit()}</h1>
   <h1>{sum(2,4)}</h1>
   <h1>{operation(2,8,"+")}</h1>
   <h1>{userObj.email}</h1>
   <h1>{userArray[0]}</h1>
<input type="text" value={name} />
<br />
<img src={path} alt="Image Not Found" height={120} width={150}/> 

  </div>
  )
}