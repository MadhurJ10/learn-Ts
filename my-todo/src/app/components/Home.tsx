'use client';
import Link from "next/link";

const Home = () => {
    return (
        <div className="flex justify-center items-center flex-col">
            <h1>Welcome to To-doooo! We are here providing you the todo</h1>
            <Link href="/todo">
                <button className="p-2 bg-green-500 rounded-2xl hover:bg-green-600 transition">
                    Get to your TODO
                </button>
            </Link>
        </div>
    )
}

export default Home;
