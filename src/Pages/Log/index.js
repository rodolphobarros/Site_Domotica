import React from 'react';



function Log()
{
    return(
        <form className='form' action='/Mapa'>
            <div className='card'>

                <div className='card-top'>
                    <h2 className='titulo'>Painel de Acesso</h2>
                    <p>Gerenciar sua casa</p>
                </div>

                <div className="grupo">
                    <label htmlFor='E-mail'>E-mail</label>
                    <input id='email'type="email" label="e_mail" placeholder="Digite seu E-mail" required />
                </div>
                
                <div className="grupo">
                    <label htmlFor='Senha'>Senha</label>
                    <input id='senha' type="password" label="senha" placeholder="Digite sua senha" required />
                </div>


                <div className="grupo">

                    <button type="submit">Acessar</button>

                </div>

              

                
            </div>
        </form>

    );
}



export default Log;