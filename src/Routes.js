import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Log from './Pages/Log';
import Mapa from './Pages/Mapa';
import Controlo from './Pages/Controlo';
import _A_Servico from './Pages/_A_Servico';
import _CB_1 from './Pages/_CB_1';
import _CB_S from './Pages/_CB_S';
import _Cozinha from './Pages/_Cozinha';
import _Quarto_1 from './Pages/_Quarto_1';
import _Quarto_S from './Pages/_Quarto_S';
import _Sala_E from './Pages/_Sala_E';
import _Sala_J from './Pages/_Sala_J';


    function Routes() {
        return(
            <BrowserRouter>
                <Switch>

                    <Route path="/" exact component={Log} />
                    <Route path="/Controlo" component={Controlo} />
                    <Route id='mapa'path="/Mapa" component={Mapa} />
                    <Route id=''path="/_A_Servico" component={_A_Servico} />
                    <Route id=''path="/_CB_1" component={_CB_1} />
                    <Route id=''path="/_CB_S" component={_CB_S} />
                    <Route id=''path="/_Cozinha" component={_Cozinha} />
                    <Route id=''path="/_Quarto_1" component={_Quarto_1} />
                    <Route id=''path="/_Quarto_S" component={_Quarto_S} />
                    <Route id=''path="/_Sala_E" component={_Sala_E} />
                    <Route id=''path="/_Sala_J" component={_Sala_J} />

                </Switch>
            
            
            </BrowserRouter>


        )

    }
export default Routes;