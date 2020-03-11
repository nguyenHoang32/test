import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
class Form extends React.Component{
    
    render(){
        const store = store.getState().items;
        return(
            <p>Counter {store}</p>
        )
    }
}
export default Form;