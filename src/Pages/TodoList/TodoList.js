import React from 'react';
import ToDo from '../../Components/Components/ToDo';
import { useQuery } from 'react-query'
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const TodoList = () => {
    const { isLoading, data: toDos} = useQuery('todo', () => fetch('https://secret-bastion-16214.herokuapp.com/todos').then(res => res.json()))
    if (isLoading) {
        return <p>Loading....</p>
    }
    return (
        <div className='bg-blue-200'>
            <Header />
            <div>
                <h1 className='text-3xl'>Total Work : {toDos.length}</h1>
                <div className="overflow-x-auto">
                    <table className="table table-compact w-full sm:w-4/6 mx-auto">
                        <thead>
                            <tr>
                                <th></th>
                                <th>ToDos</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                toDos.map((todo, index) => <ToDo
                                    key={todo._id}
                                    index={index}
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

export default TodoList;