import React from 'react';
import { useForm } from "react-hook-form";
import ToDo from '../../Components/Components/ToDo';
import { useQuery } from 'react-query'
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Home = () => {
    const { register, formState: { errors }, reset, handleSubmit } = useForm();
    const { isLoading, data: toDos, refetch } = useQuery('todo', () => fetch(`http://localhost:5000/todo/pending`).then(res => res.json()))

    // const handleKeyDown = (event) => {
    //     if (event.key === "Enter") {
    //         onSubmit()
    //     }
    // };

    const onSubmit = (data, e) => {
        const todo = {
            todoName: data.todo,
            select: data.select
        }
        const url = `http://localhost:5000/todo`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(todo)
        })
        refetch()
        reset()
    };
    
    if (isLoading) {
        return <p>Loading.....</p>
    }
    return (
        <div className='bg-blue-200 text-black'>
            <Header />
            <form onSubmit={handleSubmit(onSubmit)} className="card w-1/2 bg-neutral mx-auto mt-5">
                <div className="card-body items-center text-center">
                    <h2 className="text-3xl font-bold">Add Todo</h2>
                    <div className="form-control w-full max-w-xs">
                        <input
                            name='todo'
                            type="text"
                            placeholder="Add ToDo"
                            className="input input-bordered w-full max-w-xs"
                            // onKeyDown={handleKeyDown}
                            {...register("todo", {
                                required: {
                                    value: true,
                                    message: 'ToDo is Required',
                                }
                            })}
                        />

                        <label className="label text-error">
                            {errors.todo?.type === 'required' && <span>{errors.todo?.message}</span>}
                            {errors.radio?.type === 'required' && <span>{errors.radio?.message}</span>}
                        </label>
                        <div>
                            <input
                                {...register("select", {
                                    required: {
                                        value: true,
                                        message: 'Select Pending or Done',
                                    }
                                })}
                                type="radio"
                                id="pending"
                                name="select"
                                value="pending"
                                defaultChecked/>
                            <label htmlFor="pending" className='pl-1'>pending</label><br />
                            <input
                                {...register("select", {
                                    required: {
                                        value: true,
                                        message: 'Select Pending or Done',
                                    }
                                })}
                                type="radio"
                                id="done"
                                name="select"
                                value="done"
                                required />

                            <label htmlFor="done" className='pl-1'>done</label><br />
                        </div>
                        <input className="btn btn-primary text-white mt-6 disabled:opacity-100" type="submit" value='Add' />
                    </div>
                </div>
            </form>
            <div>
                <h1 className='text-3xl'>Total Work : {toDos.length}</h1>
                <div className="bg-white w-full sm:w-4/6 mx-auto rounded-lg">
                        <div className="rounded-lg">
                            <div className='bg-slate-200 rounded-tl-lg rounded-tr-lg'>
                                <h5 className='text-xl py-1 font-bold'>ToDos</h5>
                            </div>
                            {
                                toDos.map((todo, index) => <ToDo
                                    key={todo._id}
                                    index={index}
                                    toDo={todo}
                                />)
                            }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;