import React, { useState } from 'react';
import { useForm } from 'react-hook-form';


const ToDo = ({ toDo, index }) => {
    const { register } = useForm();
    const [edit, setEdit] = useState(false)
    const { _id, todoName, select } = toDo;
    // handle Edit
    const handleEdit = (event) => {
        console.log(event.target.todo)

    }
    // handle Delete
    const handleDelete = (id) => {
        console.log(id)
        const confirm = window.confirm('Are you sure delete this ToDo ?');
        const url = `http://localhost:5000/todo/${id}`
        if (confirm) {
            console.log(id)
            fetch(url, {
                method: 'DELETE'
            })
        }
    }

    return (
        <form className='p-3'>
            <div>
                <div className='flex justify-center items-center'>
                    <div>
                        <div className='flex items-center'>
                            <div className='mr-2'>{index + 1}</div>

                            <div className="form-control">
                                <label className="input-group">
                                    <input
                                        disabled={!edit}
                                        value={todoName}
                                        name={todoName}
                                        type="text"
                                        className='bg-white input input-bordered py-0'
                                        required
                                        {...register('todo', {
                                            required: {
                                                value: true,
                                                message: 'ToDo is Required',
                                            }
                                        })}
                                    />
                                    <select className="select select-bordered select-m" disabled={!edit}>
                                        <option>{select}</option>
                                        <option>Done</option>
                                    </select>
                                </label>
                            </div>

                        </div>
                    </div>
                    <div className='ml-5'>
                        <span>
                            {!edit ? <input className="btn bg-red-400 btn-circle btn-xs" onClick={() => setEdit(!edit)} type="button" value="E" /> : <button className="btn bg-red-400 btn-circle btn-xs ml-2" onClick={() => handleEdit(_id)}>S</button>}
                        </span>
                        <button className="btn bg-red-400 btn-circle btn-xs ml-2" onClick={() => handleDelete(_id, todoName)}>X</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ToDo;