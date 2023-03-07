import React, { useState } from 'react'
import { Button, Container } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../feature/items/itemsSlice.js"
import { v4 as uuidv4 } from "uuid";


export default function AddItems() {
    const items = useSelector(state => state.items.items);
    const dispatch = useDispatch()
    const [ item, setItem ] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(addItem({ id: uuidv4(), name: item }))

        setItem('');


    }
    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <label htmlFor="item"></label>
                <input required type="text" placeholder='Add Item' value={item} name="item"
                    onChange={e => setItem(e.target.value)}
                />
                <Button type="submit" >Add Item</Button>
            </form>
        </Container>
    )
}
