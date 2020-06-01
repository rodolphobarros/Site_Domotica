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

                <form className="grupo" action='/_Sala_E'>
                    <button type="submit">Sala de Estar</button>
                </form>

                <form className="grupo" action='/_Sala_J'>
                    <button type="submit" >Sala de Jantar</button>
                </form>

                <form className="grupo" action='/Cozinha'>
                    <button type="submit">Cozinha</button>
                </form>

                <form className="grupo" action='_A_Servico'>
                    <button type="submit">Área de Serviço</button>
                </form>

                <form className="grupo" action='/_CB_1'>
                    <button type="submit">Casa de Banho</button>
                </form>
                
                <form className="grupo" action='/_Quarto_s'>
                    <button type="submit">Quarto Master</button>
                </form>

                <form className="grupo" action='/_CB_S'>
                    <button type="submit">Casa de Banho Q.Master</button>
                   
                </form>
              


                
            </div>
        </form>

    );
}

export default Mapa;