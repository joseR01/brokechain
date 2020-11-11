import React from 'react'
// import './styles/bootstrap.min.css';
import Menu from './Menu/Menu.js';
import Footer from './Footer/Footer';
import Chats from './chat/Chats'
import './styles/sass/layout.scss'
import Switch from 'react-bootstrap/esm/Switch';
import { Route } from 'react-router-dom';
import Cambios from './Cambios/Cambios';
import './css/app.css'
function App() {

  return (
    <div>
            <Menu />
            <Switch className="bodyHeigh" >
                <Route exact path="/chat" render={()=> <Chats/>}></Route>
                <Route exact path="/cambios" render={()=> <Cambios/>}></Route>
            </Switch>
            <Footer/>

    </div>
   

  );
}
export default App;

