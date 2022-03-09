import { Component } from 'react';
import { render } from 'react-dom';
import Button from './Button';
import InputValor from './InputValor';
import './Calculadora.css';


function Calculadora (){


    return (
      <div>
          <div id="back-ground">
          <div id="container">
            <InputValor />
            <div id="container-interno">
            <Button id="AC"/> 
            
            <Button id="1"/> 
            <Button id="2"/> 
            </div>
            <div id="container-interno">

            <Button id="3"/> 
            <Button id="4"/> 
            <Button id="5"/> 
            </div>

            <div id="container-interno">

            <Button id="6"/> 
            <Button id="7"/> 
            <Button id="8"/>
            </div>

         <div id="container-interno">
 
            <Button id="9"/> 
            <Button id="0"/> 
            <Button id="+"/> 
            </div>

            <div id="container-interno">

            <Button id="-"/> 
            <Button id="/"/> 
            <Button id="*"/> 
            </div>
            
            <Button  id="="  /> 
    </div>            
    </div>
    </div>
    );
  }
  
  export default Calculadora;
