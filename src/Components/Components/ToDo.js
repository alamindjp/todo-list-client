import React from 'react';


const ToDo = ({ toDo, index, handleDelete }) => {
    const { _id, todoName } = toDo;
   
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{todoName}</td>
            {/* <td><button className="btn bg-red-400 btn-circle" onClick={() => handleDelete(_id)}>X</button></td> */}
        </tr>
    );
};

export default ToDo;