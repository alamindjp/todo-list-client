import React from 'react';
import { useForm } from "react-hook-form";
import ToDo from '../../Components/Components/ToDo';
import { useQuery } from 'react-query'
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Home = () => {
    const { register, formState: { errors }, reset, handleSubmit } = useForm();
    const { isLoading, data: toDos, refetch } = useQuery('todo', () => fetch('https://secret-bastion-16214.herokuapp.com//todos').then(res=>res.json()))
    const onSubmit = data => {
        console.log(data.todo)
        refetch()
        reset()
    };
    const handleDelete = id => {
       console.log(id)
    }
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
                            type="text"
                            placeholder="Add ToDo"
                            className="input input-bordered w-full max-w-xs"
                            {...register("todo", {
                                required: {
                                    value: true,
                                    message: 'ToDo is Required',
                                }
                            })}
                        />
                        
                        <label className="label text-error">
                            {errors.todo?.type === 'required' && <span>{errors.todo?.message }</span>}
                        </label>
                        <input className="btn btn-primary text-white mt-6" type="submit" value='Add' />
                    </div>
                    </div>
            </form>
            <div>
                <h2 className="text-2xl my-5">Total ToDo : { toDos.length }</h2>
                <div className="overflow-x-auto">
                    <table className="table table-compact  w-1/2 mx-auto">
                        <thead>
                            <tr>
                                <th></th>
                                <th>ToDos</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                toDos?.map((todo, index) => <ToDo
                                    key={todo._id}
                                    index={index}
                                    handleDelete={handleDelete}
                                    toDo={todo}
                                />)
                            }
                        </tbody>
                    </table>
                </div>
           </div>
            <Footer />
        </div>
    );
};

export default Home;