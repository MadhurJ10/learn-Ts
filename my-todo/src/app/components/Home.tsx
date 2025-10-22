'use client';

const Home = () => {
    return (
        <div className="flex justify-center items-center flex-col ">
            <h1>Welcome to To-doooo hehehhe and we are here providing you the todo</h1>
            <button className="p-2 bg-green-500 rounded-2xl"
            onClick={()=>{
                console.log("wokringgng");
            }}
            >Get to your TODO</button>
        </div>
    )
}

export default Home