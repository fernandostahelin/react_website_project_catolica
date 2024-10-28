import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <div className="App">
      <div className="images">
        <img src="https://turismo.balneariobarradosul.sc.gov.br/uploads/sites/533/2010/01/9-1000x1000.png"/>
        
      </div>
      <h2>Pronto, você conheceu tudo. A cidade é minúscula mesmo.</h2>
     </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
