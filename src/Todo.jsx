



// const Todo = ({task}) => {
//     return (
//         <div>
//             <h1>{task}</h1>
//         </div>
//     );
// };

// export default Todo;



// Conditional Rendering using tartary operator 
// const Todo = ({task,isDone}) => {
//     return (
//         <div>
//             <h1>{isDone ? 'Finished' : 'Work on'} : {task}</h1>
//         </div>
//     );
// };

// export default Todo;


// Conditional Rendering using And and or operator operator 
// const Todo = ({task,isDone}) => {
//     return (
//         <div>
//             {/* <h1>{task} {isDone && 'Done'} </h1> */}
//             <h1>{task} {isDone || 'Do it'} </h1>
//         </div>
//     );
// };

// export default Todo;



// Conditional Rendering using if else 
const Todo = ({task,isDone}) => {
    
    if(isDone === true){
        return <h1>Finished: {task}</h1>
    }
    else{
        return <h1>Do it: {task}</h1>
    }
};

export default Todo;