import React from "react";

const Details = (props) => {
    const {name}=props.userDetails;

    return(
        <div>
         <p>{name}</p>
        </div>
    )
}

export default Details;