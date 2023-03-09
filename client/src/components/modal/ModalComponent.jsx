import React, { useContext } from 'react';
import styles from './ModalComponent.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
    showAction, hideAction
} from '../../feature/modal/modalSlice';

import InnerModal from './InnerModal';
function ModalComponent() {
    const showModal = useSelector(state => state.modal.showModal);
    const dispatch = useDispatch()

    return (
        <>
            {
                showModal && <div
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
                        <InnerModal></InnerModal>
                    </div>
                </div>
            }
        </>
    );
}

export default ModalComponent;