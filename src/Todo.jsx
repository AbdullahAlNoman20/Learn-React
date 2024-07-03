



// const Todo = ({task}) => {
//     return (
//         <div>
//             <h1>{task}</h1>
//         </div>
//     );
// };

// export default Todo;



// Conditional Rendaring using tarnary operator 
// const Todo = ({task,isDone}) => {
//     return (
//         <div>
//             <h1>{isDone ? 'Finished' : 'Work on'} : {task}</h1>
//         </div>
//     );
// };

// export default Todo;


// Conditional Rendaring using And and or operator operator 
const Todo = ({task,isDone}) => {
    return (
        <div>
            {/* <h1>{task} {isDone && 'Done'} </h1> */}
            <h1>{task} {isDone || 'Do it'} </h1>
        </div>
    );
};

export default Todo;