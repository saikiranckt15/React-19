export default function App() {
  return (

    <div>
      <h1>First component</h1>
      <Fruit /> 
      <Colors/> 
    </div>
  )
}

/* Functional Component- 
1.First Letter should be Capital Letter i.e App,Fruit,Colors
*/
function Fruit() {
  return (
    <div>
      <h1>Apple</h1>
    </div>
  )
}

function Colors(){
  return(
    <div>
      <h1>Red Color</h1>
    </div>
  )
}