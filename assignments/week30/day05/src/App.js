import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Cards from './components/Cards';
import Footer from './components/Footer';

const data = [
  { id: 1, title: 'title-1' },
  { id: 2, title: 'title-2' },
  { id: 3, title: 'title-3' },
]

const App = () => (
  <div className='d-flex flex-column justify-content-between' style={{ minHeight: '100vh' }}>
    <div>
      <Nav name='Telerik' />
      <Header />
      <Cards data={data} />
    </div>
    <div>
      <Footer/>
    </div>
  </div>
);

export default App;
