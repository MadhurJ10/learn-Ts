import { useForm, SubmitHandler } from "react-hook-form";

interface Todo {
    id: number;
    msg: string;
}

interface TodoinputProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

interface FormValues {
    msg: string;
}

const Todoinput: React.FC<TodoinputProps> = ({ todos, setTodos }) => {
    const { register, handleSubmit, reset } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        const newTodo: Todo = { id: Date.now(), msg: data.msg };
        setTodos([...todos, newTodo]);
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="Enter todo"
                    className="border-2 p-1 mr-2"
                    {...register("msg")}
                />
                    
                <button type="submit" className="bg-blue-500 text-white p-1 rounded">
                    Submit
                </button>
            </form>
            <h1>Todo Input</h1>
        </div>
    );
};

export default Todoinput;
