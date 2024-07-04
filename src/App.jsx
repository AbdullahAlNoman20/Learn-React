//props send 

// import './App.css'
// import Todo from './Todo'

// function App() {

//   return (
//     <>
      
//       <h1>Vite + React</h1>
//       <Todo task="learn React" ></Todo>
//       <Todo task="Core Concepts" ></Todo>
//       <Todo task="Try JSX" ></Todo>
      
//     </>
//   )
// }

// export default App






// Conditional props Rendering

// import './App.css'
// import Todo from './Todo'

// function App() {

//   return (
//     <>
      
//       <h1>Vite + React</h1>
//       <Todo task="learn React" isDone={true}  ></Todo>
//       <Todo task="Core Concepts" isDone={false} ></Todo>
//       <Todo task="Try JSX" isDone={true} ></Todo>

      
//     </>
//   )
// }

// export default App




// props Mapping for Array value destructuring

// import Actor from './Actor'
// import './App.css'

// function App() {

//   const actors = ['sakib','Manna', 'Joshim', 'Salman Shah']

//   return (
//     <>
      
//       <Actor name={"Sakib Khan"}></Actor>

//       {
//         actors.map(actor =><Actor name={actor}></Actor>)
//       }
      
//     </>
//   )
// }

// export default App



// props Mapping for object value destructuring
// import './App.css'
// import Singer from './Singer'

// function App() {

//   const singers = [
//     {id:1, name:'Pritom',age:32},
//     {id:2, name:'Jems',age:63},
//     {id:3, name:'Tahsan',age:42},
//     ]

//   return (
//     <>

//       {
//         singers.map(singer =><Singer singer = {singer}></Singer>)
//       }
      
//     </>
//   )
// }

// export default App


 
// handle event 
// import './App.css'

// function App() {

//  function handleClick1(){
//    alert('button Clicked')
//  }

// // handle event using Arrow function
//  const handleClick2 = () =>{
//   alert('Button 2 Clicked')
//  }

//   return (
//     <>

//       <div>
//         <h1>React Core Concept 2 </h1>
//         <button onClick={handleClick1}>Click me 1 </button>
//         <button onClick={handleClick2}>Click me 2 </button>
//         <button onClick={ () =>{alert('button 2 clicked')}}>Click me 3 </button>
//       </div>
      
//     </>
//   )
// }

// export default App


// handle event with parameter
// import './App.css'

// function App() {

//   const addToFive = (num) =>{
//     alert(num + 5)
//   }

//   return (
//     <>

//       <div>
//         <h1>React Core Concept 2 </h1>
//         <button onClick={()=>{addToFive(7)}}>Add with Five</button>
//       </div>
      
//     </>
//   )
// }

// export default App



// use of userState react Hook

// import './App.css'
// import Counter from './Counter'

// function App() {

//   return (
//     <>

//       <div>
//         <h1>React Core Concept 2 </h1>
//         <Counter></Counter>
//       </div>
      
//     </>
//   )
// }

// export default App



// use of useEffect
import './App.css'
import Users from './Users'

function App() {

  return (
    <>

      <div>
        <h1>React Core Concept 2 </h1>
        <Users></Users>
      </div>
      
    </>
  )
}

export default App
