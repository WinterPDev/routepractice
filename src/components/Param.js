import React, { useState } from 'react';
import { useParams } from 'react-router';


const Param = (props) => {
    const { value } = useParams();

    return (
            isNaN(value)
                ? (<h1>The Word is {value}</h1>)
                : <h1>The Number is {value}</h1>
        )
}

export default Param;