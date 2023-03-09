import React, { useState } from 'react'
import { Button, Container } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import { fetchItems, postItems } from "../feature/items/itemsSlice.js"
import { showAction } from '../feature/modal/modalSlice.js';
import { v4 as uuidv4 } from "uuid";


export default function AddItems() {
    const items = useSelector(state => state.items.items);
    const dispatch = useDispatch()
    const [ item, setItem ] = useState('')
    const handleSubmit = (event) => {
        // event.preventDefault();

        // dispatch(postItems({ name: item }, dispatch))

        // setItem('');


        dispatch(showAction);


    }
    return (
        <Container>
            {/* <form onSubmit={handleSubmit}>
                <label htmlFor="item"></label>
                <input required type="text" placeholder='Add Item' value={item} name="item"
                    onChange={e => setItem(e.target.value)}
                />
                <Button type="submit" >Add Item</Button>
            </form> */}

            <Button outline color='primary' onClick={() => {
                dispatch(showAction());
            }}>Add Item</Button>
        </Container>
    )
}
