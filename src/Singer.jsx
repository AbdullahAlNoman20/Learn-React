
const Singer = ({singer}) => {
    console.log(singer)
    return (
        <div>
            <h1>Singer:{singer.name}</h1>
            <h1>Age:{singer.age}</h1>
        </div>
    );
};

export default Singer;