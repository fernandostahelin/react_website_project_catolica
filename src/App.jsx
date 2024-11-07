import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Form from './components/Form'
import './App.css'

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <main className='main-content'>
          <div className='images'>
            <img
              src='https://turismo.balneariobarradosul.sc.gov.br/uploads/sites/533/2010/01/9-1000x1000.png'
              alt='Balneário Barra do Sul'
            />
          </div>
          <h2>Conheça a praia mais perto de Joinville.</h2>
          <Form />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
