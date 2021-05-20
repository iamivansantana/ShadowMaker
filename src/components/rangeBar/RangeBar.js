import React, { useEffect } from 'react'

const RangeBar = ({id,name,valueMin,valueMax,valueDefault,valueDown}) => {

    console.log(id,name,valueMin,valueMax,valueDefault,valueDown);
    
    

    useEffect(() => {

        const barra = document.getElementById(`${id}`);
        const downValue  = document.getElementById(`${valueDown}`);

        downValue.innerHTML =  barra.value;
        barra.oninput = function(){
            //Asignacion del valor del slider a la caja de texto
            downValue.innerHTML = this.value;
        }

        barra.addEventListener('input',function(){
            const porcentajePropagation = ((barra.value - barra.min) / (barra.max - barra.min) * 100 ); 
            const colorBarraPropagation = `linear-gradient(90deg, rgb(117, 241, 252) ${porcentajePropagation}%,rgb(214, 214, 214)${porcentajePropagation}%)`;
            barra.style.background = colorBarraPropagation;

     
        });

        
        
    }, []);

    //Function for sliders
    const mySliders = () => {


        const barra = document.getElementById(`${id}`);


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

                    
                        const inputValue = shadowcolorInputColor.value;

                        const color = inputValue;
                        const red = color[1]+color[2];
                        const green = color[3]+color[4];
                        const  blue= color[5]+color[6];

                        const r = parseInt(red,16);
                        const g = parseInt(green,16);
                        const b = parseInt(blue,16);
        
        // sliderBarPropagationRadiusColor
        //Porcentaje entre Min(-200) y Max(200)
        const porcentajePropagation = ((barra.value - barra.min) / (barra.max - barra.min) * 100 ); 
        const colorBarraPropagation = `linear-gradient(90deg, rgb(117, 241, 252) ${porcentajePropagation}%,rgb(214, 214, 214)${porcentajePropagation}%)`;
        barra.style.background = colorBarraPropagation;
        
                    const value = ` ${valueSliderWidth}px ${valueSliderHeight}px ${valueSliderRadius}px ${valueSliderPropagation}px rgb(${r}, ${g}, ${b}, ${valueSliderOpacity})`;
                    const colorRgba = ` rgb(${r}, ${g}, ${b}, ${valueSliderOpacity})`;         
                    caja.style.color = colorRgba;
                    caja.style.boxShadow = value;

    };
    

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
