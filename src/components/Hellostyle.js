import {useParams} from 'react-router';
import React from 'react';


const HelloStyle = (props) => {
    const { value, colorname, bgcolor} = useParams();
    const helloCSS = {
        color: colorname,
        backgroundColor: bgcolor
    }
    return(
        isNaN(value)
        ? (<h1 style={helloCSS}>The Word is: {value}</h1>)
        : (<h1 style={helloCSS}>The Number is: {value}</h1>)
    )
}

export default HelloStyle;