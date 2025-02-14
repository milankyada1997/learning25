import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Header } from './components/Header';
import { Content } from './components/Content';
import Footer from './components/Footer';
import { ArrayDemo1 } from './components/ArrayDemo1';
import { ArrayDemo2 } from './components/ArrayDemo2';
import { ArrayDemo3 } from './components/ArrayDemo3';
import { ArrayDemo4 } from './components/ArrayDemo4';
import { City } from './components/City';
import { SalesData } from './components/SalesData';
import { UseStateDemo } from './components/UseStateDemo';
import { UseStateDemo1 } from './components/UseStateDemo1';
import { InputDemo } from './components/InputDemo';
import { InputDemo1 } from './components/InputDemo1';
import { InputDemo2 } from './components/InputDemo2';
import { InputDemo3 } from './components/InputDemo3';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { HotstarWelcome } from './components/Hotstar/HotstarWelcome';
import { Error404 } from './components/Hotstar/Error404';
import { HotstarMovies } from './components/Hotstar/HotstarMovies';
import { HotstarHome } from './components/Hotstar/HotstarHome';
import { Play } from './components/Hotstar/Play';
import { FormDemo } from './components/Form/Formdemo';
import { FormDemo1 } from './components/Form/FormDemo1';
import { FormDemo2 } from './components/Form/FormDemo2';
import { FormDemo3 } from './components/Form/FormDemo3';
import { FormDemo4 } from './components/Form/FormDemo4';
import { LoginForm } from './components/Form/LOginForm';


function App() {

  return (

      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HotstarWelcome/>}/>
          <Route path='/home' element={<HotstarHome/>}/>
          <Route path='/movies' element={<HotstarMovies/>}/>
          <Route path='/play/:id' element={<Play/>}></Route>
          <Route path='/formdemo' element ={<FormDemo/>}>  </Route>
          <Route path='/formdemo1' element ={<FormDemo1/>}>  </Route>
          <Route path='/formdemo2' element ={<FormDemo2/>}>  </Route>
          <Route path='/formdemo3' element ={<FormDemo3/>}>  </Route>
          <Route path='/formdemo4' element ={<FormDemo4/>}>  </Route>
          <Route path='/loginform' element ={<LoginForm/>}>  </Route>
          <Route path='/*' element={<Error404/>}/>
        </Routes>
      </div>
      
    );
}

export default App
