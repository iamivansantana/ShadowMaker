import React, { useEffect } from 'react'

//Componente RangeBar con  los atributos recibidos por props
const RangeBar = ({id,name,valueMin,valueMax,valueDefault,valueDown,nameClass}) => {

    //se utiliza un useEffect para crear los Id de los elementos html despues de la creacion del documento html
    //Para más información checar el ciclo de vida de un componente en react
    useEffect(() => {

        //Creacion de referencia a Elementos HTML.
        const barra = document.getElementById(id);
        const downValue  = document.getElementById(valueDown);
        const className = document.querySelectorAll(nameClass);
        
        barra.addEventListener('input',function(){
            //Porcentaje del defaultValue entre valor Minimo y ValorMaximo. 
            //Para funcionamiento del desplazamiento del color de la rangeBar
            const porcentajePropagation = ((barra.value - barra.min) / (barra.max - barra.min) * 100 ); 
            const colorBarraPropagation = `linear-gradient(90deg, rgb(117, 241, 252) ${porcentajePropagation}%,rgb(214, 214, 214)${porcentajePropagation}%)`;
            barra.style.background = colorBarraPropagation;
        
            //Creacion de referencia a Elementos HTML.
            const caja = document.getElementById('caja');
            const sliderOpacity = document.getElementById('myRangeOpacity').value;
            const sliderWidth = document.getElementById('myRangeWidth').value;
            const sliderHeight = document.getElementById('myRangeHeight').value;
            const sliderRadius = document.getElementById('myRangeRadius').value;
            const sliderPropagation = document.getElementById('myRangePropagation').value;
            const shadowcolorInputColor= document.getElementById('shadowcolorInputColor');

            //Valor del Slider (Barra).
            const valueSliderOpacity = sliderOpacity*0.01;
            //Valor del SliderWidth (Barra).
            const valueSliderWidth = sliderWidth;
            //Valor del SliderHeight (Barra).
            const valueSliderHeight = sliderHeight;
            //Valor del SliderRadius (Barra).
            const valueSliderRadius = sliderRadius;
            //Valor del SliderPropagation (Barra).
            const valueSliderPropagation = sliderPropagation;

            //Condicion exclusiva para 'myRangeOpacity' por que su valor son decimales (entre 0 y 1) y el rangeBar sus valores son en unidades (del 1 al 100 ó 200 ó etc...)
            if (id === 'myRangeOpacity') {
                //Se asigna el valor mostrado en la parte inferior derecha del componente limitandolo a 2 numeros
                downValue.innerHTML =  valueSliderOpacity.toFixed(2);

                barra.oninput = function(){
                    //Asignacion del valor del slider a los elementos con la className indicada y a la caja de texto mostrado en la parte inferior derecha del componente limitandolo a 2 numeros
                    downValue.innerHTML = valueSliderOpacity.toFixed(2);
                    className.forEach(function(elemento, indice, array) {                                        
                        elemento.innerHTML = valueSliderOpacity.toFixed(2);                                     
                    });
                }
            } else {
                downValue.innerHTML =  barra.value;
                barra.oninput = function(){
                    const thisValue = parseInt(this.value);
                    //Asignacion del valor del slider a la caja de texto
                    downValue.innerHTML = thisValue;
                    className.forEach(function(elemento, indice, array) {
                            elemento.innerHTML = thisValue; 
                    });
                }
            }            

            //Se asigna el valor del color de la sombra Inputcolor donde color es una string como -> ("#a5a8b1").
            const color =  shadowcolorInputColor.value;
            //El valor 1 y 2 del string corresponden al valor exadecimal del color red, 3 y 4 al color green y 5 y 6 al color blue.
            const red = color[1]+color[2];
            const green = color[3]+color[4];
            const  blue= color[5]+color[6];

            //Los string se convierten en numeros base 16
            const r = parseInt(red,16);
            const g = parseInt(green,16);
            const b = parseInt(blue,16);        

        //Se asigna a value la estructura con los valores que se van modifiando para la sombra de la caja.
        const value = ` ${valueSliderWidth}px ${valueSliderHeight}px ${valueSliderRadius}px ${valueSliderPropagation}px rgb(${r}, ${g}, ${b}, ${valueSliderOpacity})`;
        //Se asigna a colorRgba la estructura de los colores que se van modifiando para el color de la caja.
        const colorRgba = ` rgb(${r}, ${g}, ${b}, ${valueSliderOpacity})`;         
        //Se asignan las constantes al style de la caja (color y sombra). 
        caja.style.color = colorRgba;
        caja.style.boxShadow = value;
        });  
    } );

    return (
        <>
          <div className="caja-slider-slider">
            <div className="caja-content-slider">
                <div className="P">
                    <p>{name}</p>
                </div>
                <input type="range" min={valueMin} max={valueMax}  defaultValue={valueDefault} id={id} className="slider"/>
                <div className="slider-values">
                    <p>{valueMin}</p>
                    <p>{valueMax}</p>  
                </div>
                <div className="P" style={{marginTop:'-.5rem'}}>
                    <p>Value:  <span id={valueDown}></span> px</p>
                </div>
            </div>
        </div>  
        </>
    )
}
export default RangeBar
