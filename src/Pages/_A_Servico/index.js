import React, { useState }from "react";
import axios from 'axios';
import './App.css';


var url = "http://localhost:4000/pi/atuador/luminaria/1"

const App = props => {
var a;
const [value1, setValue] = useState(false);
const style = value1 ? 'toggle' : 'toggle toggle-value'
//value1 = this.$axios.get(url,{luz1:''});

return(
  <l className={style} onClick={()=>{
      setValue(!value1);
      if(value1 == true)
      axios.put(url,{value:'false'})
      else
      axios.put(url,{value:'true'})
      }}/> 
  );
};
function Switch()
{
  return ( <App />)
}

function Controlo()
{return(
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



)};
export default Controlo;

