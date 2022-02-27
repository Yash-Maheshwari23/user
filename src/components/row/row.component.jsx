import React from "react";

const Row = (props) =>{
    const {id,title,completed, userId} = props.user
    return(
        <tbody>
            <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{completed?`complete`:`uncomplete`}</td>
            <td><button onClick={()=>props.detailsBtnHandler(userId)}>View User</button></td>
            </tr>
            </tbody>
        
        
    )
}

export default Row;