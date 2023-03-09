import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import AppNavBar from './components/AppNavBar'
import ShoppingList from './components/ShoppingList'
import AddItems from './components/AddItems'
import ModalComponent from './components/modal/ModalComponent'
import store from "./feature/store"

import { Provider } from 'react-redux'

function App() {

  return (
    <Provider store={store}>
      <ModalComponent></ModalComponent>
      <div className='app'>

        <AppNavBar></AppNavBar>
        <AddItems></AddItems>
        <ShoppingList></ShoppingList>
      </div>
    </Provider>
  )
}

export default App
