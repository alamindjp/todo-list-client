import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const TodoList = () => {
    return (
        <div className='bg-blue-200'>
            <Header />
            <div className=''>
                <h1 className='text-3xl'>todo page</h1>
            </div>
            <Footer />
        </div>
    );
};

export default TodoList;