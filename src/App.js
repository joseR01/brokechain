import React from 'react'
// import './styles/bootstrap.min.css';
import Menu from './Menu/Menu.js';
import Footer from './Footer/Footer';
import Chats from './chat/Chats'
import './styles/sass/layout.scss'
import { Route, Switch } from 'react-router-dom';
import Cambios from './Cambios/Cambios';
import './css/app.css'
function App() {

  return (
    <div>
            <Menu />
            <Switch>
              <div className="bodyHeigh">
                <Route exact path="/chat" render={()=> <Chats/>}></Route>
                <Route exact path="/cambios" render={()=> <Cambios/>}></Route>
              </div>
            </Switch>
            <Footer/>

    </div>
   

  );
}
export default App;

