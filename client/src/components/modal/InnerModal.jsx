
import { Button, Container } from 'reactstrap';

import { hideAction, showAction } from '../../feature/modal/modalSlice.js';
import { postItems } from '../../feature/items/itemsSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import react, { useState } from 'react'
export default function InnerModal() {
    const items = useSelector(state => state.items.items);
    const dispatch = useDispatch()
    const [ item, setItem ] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(postItems({ name: item }, dispatch))

        setItem('');

        dispatch(hideAction())


    }
    return (
        <div>
            <h1>Add Shopping Item</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <label htmlFor="item"></label>
                <input autoFocus style={{
                    borderRadius: "1rem", border:
                        "none", marginRight: "1rem"
                }} required type="text" placeholder='Add Item' value={item} name="item"
                    onChange={e => setItem(e.target.value)}
                />
                <Button type="submit" >Add Item</Button>
            </form>
        </div>
    )
}
