import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Navbar} from './components/common/Navbar';
import {Home} from './pages/Home'
import {Article} from './pages/Article'
import {FirebaseState} from './firebase/firebaseState'

const App = () => (
    <FirebaseState>
        <BrowserRouter>
            <Navbar/>
            <div className="container-fluid p-0 h-100">
                <Switch>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/article'} component={Article}/>
                </Switch>
            </div>
        </BrowserRouter>
    </FirebaseState>
);

export default App;
