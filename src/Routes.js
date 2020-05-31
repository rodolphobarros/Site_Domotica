import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Log from './Pages/Log';
import Mapa from './Pages/Mapa';
import Controlo from './Pages/Controlo';

    function Routes() {
        return(
            <BrowserRouter>
                <Switch>

                    <Route path="/" exact component={Log} />
                    <Route path="/Controlo" component={Controlo} />
                    <Route id='mapa'path="/Mapa" component={Mapa} />

                    

                </Switch>
            
            
            </BrowserRouter>


        )

    }
export default Routes;