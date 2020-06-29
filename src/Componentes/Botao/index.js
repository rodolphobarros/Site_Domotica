import React, { useState } from 'react';
import './App.css';

const App = props => {
const [value, setValue] = useState(false);
const style = value ? 'toggle' : 'toggle toggle-value'
return(
  <l className={style} onClick={()=>setValue(!value)} /> 
  );
};

function Switch()
{
  return ( <App />)

}


export default Switch;