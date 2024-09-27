//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import ListElement from './ListElement'

function App() {

    const users = [
        { title: 'Gosha', man: true, id: 1 },
        { title: 'Anatole', man: true, id: 2 },
        { title: 'Mariana', man: false, id: 3 }
    ];



    const listMemi = users.map((user) =>
        <ListElement key={user.id} title={user.title}/>
    );

  return (
    <>
          <ul>{listMemi}</ul>
    </>
  )
}

export default App
