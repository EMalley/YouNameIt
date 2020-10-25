//from packages & other files
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap'
import './App.css';

//components
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import SignUp from './components/SignUp';



function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <SignUp></SignUp>
      
      <Container>
        <Footer></Footer>
      </Container>
    </div>
  );
}

export default App;
