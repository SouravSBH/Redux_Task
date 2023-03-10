import "bootstrap/dist/css/bootstrap.min.css"
import { useState, useEffect } from 'react'
import './App.css'
import AppNavBar from './components/AppNavBar'
import ShoppingList from './components/ShoppingList'
import AddItems from './components/AddItems'
import ModalComponent from './components/modal/ModalComponent'
import AddItemForm from './components/innerModalForms/AddItemForm'
import { useDispatch, useSelector, } from 'react-redux'
import SignUpForm from './components/innerModalForms/SignUpForm'
import Profile from "./components/profile/Profile"
import { getUserWithToken } from "./feature/user/userSlice"

function App() {
  const show = useSelector(state => state.modal);
  const dispatch = useDispatch();


  useEffect(() => {

    dispatch(getUserWithToken(localStorage.getItem("jwt_token")))
    return () => {

    }
  }, [])


  return (
    <>
      <ModalComponent>
        {show.showItemForm && <AddItemForm></AddItemForm>}
        {show.showSignUp && <SignUpForm></SignUpForm>}
      </ModalComponent>
      <div className='app'>
        <AppNavBar></AppNavBar>
        <Profile></Profile>
        <AddItems></AddItems>
        <ShoppingList></ShoppingList>
      </div>
    </>
  )
}

export default App
