import './Button.css';

var valor1='0';
var valor2='';
let operador;

function Clicked(valor){
  const exibir = document.getElementById("input3");
 
switch(valor){
  case '0':
  case '1':case '2':case '3':case'4':case'5':case'6':
  case'7':case'8':case'9':
  
    
  
      valor1+=valor;
      
      
      exibir.textContent=valor1;
      console.log(valor1);
    break;
  case 'AC':
    valor2='';
    valor1='';
    exibir.textContent=valor1;
    break;

  case '+':case '-': case'*': case'/':
    valor2=valor1+parseFloat(valor2);
    operador=valor;
    valor1=''; 
    break;

  case '=':

  if(operador!=undefined){
    switch(operador){
      

        case '+':
        valor1=parseFloat(valor1)+parseFloat(valor2);
        exibir.textContent=valor1;
  valor2=valor1.toString();
  valor1='0';
  operador='';
  console.log("oi");
        break;
        case '-':
          valor1=parseFloat(valor2)-parseFloat(valor1);
          exibir.textContent=valor1;
  valor2=valor1.toString();
  valor1='0';
  operador='';
        break;
        case '*':
          valor1=parseFloat(valor1)*parseFloat(valor2);
          exibir.textContent=valor1;
  valor2=valor1.toString();
  valor1='0';
  operador='';
        break;
        case '/':
          valor1=parseFloat(valor2)/parseFloat(valor1);
          exibir.textContent=valor1;
  valor2=valor1.toString();
  valor1='0';
  operador='';
        break;
  
  
    }
}

}
    
  
    
    

}



function Button (props){
  
  
  return (
    
      <button onClick={()=>{Clicked(props.id)}}>{props.id}</button>
    
  );
  
  
  }
  
  
  


export default Button;
