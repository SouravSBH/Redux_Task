import React, { useEffect, useState, useRef } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from "uuid";
// import item from '../../../models/item';
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../feature/items/itemsSlice.js"



export default function ShoppingList() {
    // const [ items, setItems ] = useState([])
    const items = useSelector(state => state.items.items);
    const dispatch = useDispatch()

    const nodeRef = useRef(null);
    return (
        <Container>
            <ListGroup >
                <TransitionGroup className="shopping-list">
                    {items.map((item, index) =>

                    (
                        <CSSTransition nodeRef={nodeRef} key={item.id}
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
                                        dispatch(removeItem(item))
                                    }}
                                >
                                    &times;
                                </Button>

                                <span>{`  ${item.name}`}</span>
                            </ListGroupItem>
                        </CSSTransition>
                    ))
                    }
                </TransitionGroup>
            </ListGroup>
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
