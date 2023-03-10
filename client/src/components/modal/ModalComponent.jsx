import React, { useContext } from 'react';
import styles from './ModalComponent.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
    showAction, hideAction
} from '../../feature/modal/modalSlice';

import AddItemForm from '../innerModalForms/AddItemForm';
function ModalComponent(props) {
    const showModal = useSelector(state => state.modal);
    const dispatch = useDispatch()

    return (
        <>
            {
                Object.values(showModal).some(val => val === true) && <div
                    onClick={(e) => {
                        // e.stopPropagation()
                        dispatch(hideAction());
                        console.log("outer click")
                    }}
                    className={`${styles.outer} `}>
                    {/* <h1 style={{ backgroundColor: ui.modalColor }} className={`${styles.inner} `}>
                        
                    </h1> */}

                    <div onClick={(e) => {
                        e.stopPropagation()

                    }} className={`${styles.inner} `}>
                        {props.children}
                    </div>
                </div>
            }
        </>
    );
}

export default ModalComponent;