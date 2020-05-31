import React from 'react';

function Mapa()
{
    return(
        <form className='form'>
            <div className='card'>

                <div className='card-top'>
                    <h2 className='titulo'>Painel de Acesso</h2>
                    <p>Gerenciar sua casa</p>
                </div>

                <form className="grupo" action='/Controlo'>
            
                    <button type="submit">Sala de Estar</button>
                </form>

                <form className="grupo" action='/Controlo'>
                    <button type="submit" action='/Controlo'>Sala de Jantar</button>
                </form>

                <form className="grupo" action='/Controlo'>
                    <button type="submit" action='/Controlo'>Cozinha</button>
                </form>

                <form className="grupo" action='/Controlo'>
                    <button type="submit" action='/Controlo'>Varanda</button>
                </form>

                <form className="grupo" action='/Controlo'>
                    <button type="submit" action='/Controlo'>WC Social</button>
                </form>
                
                <form className="grupo" action='/Controlo'>
                    <button type="submit" action='/Controlo'>Quarto Master</button>
                </form>

                <form className="grupo" action='/Controlo'>
                    <button type="submit" action='/Controlo'>WC QMaster</button>
                   
                </form>
              


                
            </div>
        </form>

    );
}

export default Mapa;