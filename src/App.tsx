import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideNav from './component/side-nav/side-nav';
import CreditCard from './component/credit-card/credit-card';
import Welcome from './component/welcome/welcome';

function App() {
  const detail = {address : 'north street',pincode : 614018}
  const isLoggedIn = false
  return (
    <div>
      {isLoggedIn
        ? <Welcome name='vetri' />
        : <Welcome  name='karthi' />
      }
    {/* <Welcome name='vetri' details={detail} />
    <Welcome name='karthi' /> */}
    {/* <Welcome name='vel' /> */}
    </div>
    );
}

export default App;


