import './App.scss';
import Banner from './Components/Banner/Banner';
import Header from './Components/Header/Header';

import { banner__icon } from './assets/api-fake/dataFake';
import About from './Components/About/About';
import ShowProject from './Components/Section/ShowProject';
import Footer from './Components/Footer/Footer'
// import AddProject from './Components/AddProject/AddProject';
// import { useState } from 'react';


function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header />
        <Banner icon={banner__icon}/>
        <About />
        <ShowProject />
        <Footer />
      </div>
    </div>
  );
}

export default App;
