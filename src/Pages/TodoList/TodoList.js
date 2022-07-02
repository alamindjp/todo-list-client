import React from 'react';
import ToDo from '../../Components/Components/ToDo';
import { useQuery } from 'react-query'
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const TodoList = () => {
    const { isLoading, data: toDos } = useQuery('todo', () => fetch('https://red-bunnyhug-54821.herokuapp.com/todo').then(res => res.json()))
    if (isLoading) {
        return <p>Loading.....</p>
    }
    return (
        <div className='bg-blue-200'>
            <Header />
            <div>
                <h1 className='text-3xl my-3 font-bold text-black'>All ToDos : {toDos?.length}</h1>
                <div className="bg-white w-full sm:w-4/6 mx-auto rounded-lg">
                        <div className="rounded-lg">
                            <div className='bg-slate-200 rounded-tl-lg rounded-tr-lg'>
                                <h5 className='text-xl py-1 font-bold'>ToDos</h5>
                            </div>
                            {
                                toDos?.map((todo, index) => <ToDo
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

export default TodoList;