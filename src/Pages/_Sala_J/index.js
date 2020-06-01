import React from 'react';
import Switch from '../../Componentes/Botao';

function Controlo()

{
    return(
        <form className='form'>
            <div className='card'>
                <div className='card-top'>
                    <h2 className='titulo'>Painel de Acesso</h2>
                    <h4>Controle de Iluminação</h4>
                </div>
                
                <l>Luminaria Central</l><Switch/>
                                
                <form className="grupo" action='/Mapa'>
                    <div className='card-top'>
                        <h4>Controle de Temperatura</h4>
                    </div>
                    <input className='range' type='range' min='22' max='28' step='0.5'></input>
                    <button type="submit" action='/Controlo' >Set-Valor</button>
                </form>
                <form className="grupo" action='/Mapa'>
                    <button type="submit" action='/Controlo'>Retorna</button>
                </form>
             
            </div>
        </form>
    )
};
export default Controlo;
