//Here Login= is the Default so for that reson we couldn't give the {} Curly Braces
import Login,{Profile,Setting,UserKey} from './UserComponent'



function callFun(){
 alert("Function Called One")
}
export default function App(){
  return (
    <div>
    <h1>Anil Sidhu Todos</h1>
    <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg" height="200" alt="Oops! Not Found Image" />

    <ul>
      <li>Invent New Traffic Lights</li>
      <li>Invent New Traffic Lights</li>
      <li>Invent New Traffic Lights</li>
    </ul>

    <button onClick={()=>alert("Function Called")}> Click</button>
    <button onClick={callFun}>Click Me</button>
    </div>
  )
}