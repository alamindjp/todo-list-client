import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const TodoList = () => {
    return (
        <>
            <Header/>
            <h1 className="text-3xl">Todo List</h1>
            <Footer/>
        </>
    );
};

export default TodoList;