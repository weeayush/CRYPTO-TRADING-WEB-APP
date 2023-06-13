import React from 'react';
import {ChakraProvider} from '@chakra-ui/react'
import { HStack,Text } from '@chakra-ui/react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
 import Header from './components/Header';
import { Home } from './components/Home';
import Coins from './components/Coins';
import { Exchanges } from './components/Exchanges';
import CoinDetails from './components/CoinDetails';
import Footer from './components/Footer';
import { About } from './components/About';
function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/coins/:id' element={<CoinDetails/>}/>
          <Route path='/coins' element={<Coins/>}/>
          <Route path='/exchange' element={<Exchanges/>}/>
          <Route path='/aboutus' element={<About/>}/>
        </Routes>
        <Footer/> 
      </Router>
    </ChakraProvider>
  );
}

export default App;
