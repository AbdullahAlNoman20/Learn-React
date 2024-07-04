
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







import './App.css'
import Todo from './Todo'

function App() {

  return (
    <>
      
      <h1>Vite + React</h1>
      <Todo task="learn React" isDone={true}  ></Todo>
      <Todo task="Core Concepts" isDone={false} ></Todo>
      <Todo task="Try JSX" isDone={true} ></Todo>

      
    </>
  )
}

export default App


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
