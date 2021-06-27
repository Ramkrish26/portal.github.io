import React from 'react'
import './App.css';
import './css/HeaderSection.css'
import './css/MainSection.css'
import HeaderSection from './js/HeaderSection';
import MainSection from './js/MainSection'

function App() {
  return (
    <React.Fragment>
      <div className="headerSection">
        <HeaderSection/>
      </div>
      <div className='mainSection'>
        <MainSection/>
      </div>
    </React.Fragment>
  );
}

export default App;
