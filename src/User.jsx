
const user = ({user}) => {
    // console.log(user)
    const {name,email} = user
    return (
        <div>
            <h1>Name: {name}</h1>            
            <h1>Email: {email}</h1>            
        </div>
    );
};

export default user;