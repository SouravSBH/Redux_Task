import React, { useEffect, useState, useRef } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Loader from './Loader/Loader';
// import item from '../../../models/item';
import { useSelector, useDispatch } from "react-redux";
import { fetchItems, deleteItem } from "../feature/items/itemsSlice.js"



export default function ShoppingList() {
    // const [ items, setItems ] = useState([])
    const items = useSelector(state => state.items.items);
    const loading = useSelector(state => state.items.loading);
    const dispatch = useDispatch()

    // const nodeRef = useRef(null);

    useEffect(() => {
        dispatch(fetchItems())
    }, [])
    return (
        <Container>
            {
                // loading ?
                //     <Loader></Loader> :
                <ListGroup >
                    <TransitionGroup className="shopping-list">
                        {items.map((item, index) => (
                            <CSSTransition key={item._id}
                                timeout={500}
                                classNames="my-node"
                            >
                                <ListGroupItem>

                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={() => {

                                            // setItems([ ...items.filter(i => i.id !== item.id) ])
                                            dispatch(deleteItem(item._id), dispatch)
                                        }}
                                    >
                                        &times;
                                    </Button>

                                    <span>{`  ${item.name}`}</span>
                                </ListGroupItem>
                            </CSSTransition>
                        )
                        )
                        }
                    </TransitionGroup>
                </ListGroup>}
            {/* <Button

                onClick={() => {
                    let name = prompt("Enter name:");
                    if (name) {
                        // items.push({ id: uuidv4(), name: name })
                        // setItems([ ...items ])

                        dispatch(addItem({ id: uuidv4(), name: name }))

                    }
                }}>
                ADD ITEM
            </Button> */}
        </Container>
    )
}
