import { useEffect, useState } from 'react'
import './App.css'

import Form from './components/Form'
import List from './components/Lista'


function App() {
  const [items, setItems] = useState([])
  const [itemToEdit, setItemToEdit] = useState(null)

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || []
    setItems(storedItems)
  }, [])

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  const addOrUpdateItem = (value) => {
    if (itemToEdit) {
      setItems(items.map(item =>
        item.id === itemToEdit.id ? { ...item, value } : item
      ))
      setItemToEdit(null)
    } else {
      setItems([...items, { id: Date.now(), value }])
    }
  }

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  const editItem = (item) => {
    setItemToEdit(item)
  }

  return (
    <div className="App">
      <div className="section">
        <Form addOrUpdateItem={addOrUpdateItem} itemToEdit={itemToEdit} />
      </div>
      <div className="section">
        <List items={items} deleteItem={deleteItem} editItem={editItem} />
      </div>
    </div>
  )
}

export default App
