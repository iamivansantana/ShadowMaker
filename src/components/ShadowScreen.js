import React, { useEffect } from 'react';
import RangeBar from './rangeBar/RangeBar';


const ShadowScreen = () => {

    //se utiliza un useEffect para crear los Id de los elementos html despues de la creacion del documento html
    //Para más información checar el ciclo de vida de un componente en react
   useEffect(() => {
        //Creacion de referencia a Elementos HTML.
        const caja = document.getElementById('caja');
        const sliderOpacity = document.getElementById('myRangeOpacity');                
        const sliderWidth = document.getElementById('myRangeWidth');        
        const sliderHeight = document.getElementById('myRangeHeight');        
        const sliderRadius = document.getElementById('myRangeRadius');       
        const sliderPropagation = document.getElementById('myRangePropagation');  
        
        const valueRedClass = document.querySelectorAll('.valueRedClass');     
        const valueGreenClass = document.querySelectorAll('.valueGreenClass');     
        const valueBlueClass = document.querySelectorAll('.valueBlueClass');     
        
       //InputColor-Background Color.
            //Elemento Input tipo color para definir el color del fondo.
        const backColorInputColor= document.getElementById('backColorInputColor');
        backColorInputColor.addEventListener('input', e => {
            let background = document.getElementById('fondo');
            background.style.background = e.target.value;
            document.getElementById('backColorInputText').value = e.target.value;
        });
        //InputText-Background Color
            //Elemento Input tipo text para definir el color del fondo.
        const backColorInputText= document.getElementById('backColorInputText');
        backColorInputText.addEventListener('input', e => {
            let background = document.getElementById('fondo');
            background.style.background = e.target.value;
            document.getElementById('backColorInputColor').value = e.target.value;
        });

        //InputColor-Box Color
            //Elemento Input tipo color para definir el color del la caja.
       const boxColorInputColor= document.getElementById('boxColorInputColor');
       boxColorInputColor.addEventListener('input', e => {
            caja.style.background = e.target.value;
            document.getElementById('boxColorInputText').value = e.target.value;
        });
        //InputText-Box Color
            //Elemento Input tipo text para definir el color del la caja.
        const boxColorInputText= document.getElementById('boxColorInputText');
        boxColorInputText.addEventListener('input', e => {
            caja.style.background = e.target.value;
            document.getElementById('boxColorInputColor').value = e.target.value;
        });

        //InputColor-Shadow Color
            //Elemento Input tipo color para definir el color del la sombra.
       const shadowcolorInputColor= document.getElementById('shadowcolorInputColor');
       shadowcolorInputColor.addEventListener('input', e => {

           //Valor del Slider (Barra).
           const valueSliderOpacity = sliderOpacity.value*0.01;
           //Valor del SliderWidth (Barra).
           const valueSliderWidth = sliderWidth.value;
           //Valor del SliderHeight (Barra).
           const valueSliderHeight = sliderHeight.value;
           //Valor del SliderRadius (Barra).
           const valueSliderRadius = sliderRadius.value;
           //Valor del SliderPropagation (Barra).
           const valueSliderPropagation = sliderPropagation.value;

           //Asignacion del valor target a const color donde color es una string como -> ("#a5a8b1")
           const color = e.target.value;
            
           //El valor 1 y 2 del string corresponden al valor exadecimal del color red
            const red = color[1]+color[2];
            //El valor 3 y 4 del string corresponden al valor exadecimal del color green
            const green = color[3]+color[4];
             //El valor 5 y 6 del string corresponden al valor exadecimal del color blue
            const  blue= color[5]+color[6];

            //Los string se convierten en numeros base 16
            const r = parseInt(red,16);
            const g = parseInt(green,16);
            const b = parseInt(blue,16);

            //para cada elemto con la clase valueRedClass se le asigna el valor de r
            valueRedClass.forEach(function(elemento, indice, array) {                                        
                    elemento.innerHTML = r;                                     
                });
            //para cada elemeto con la clase valuegreenClass se le asigna el valor de g
            valueGreenClass.forEach(function(elemento, indice, array) {                                        
                    elemento.innerHTML = g;                                     
                });
            //para cada elemeto con la clase valueBlueClass se le asigna el valor de b
            valueBlueClass.forEach(function(elemento, indice, array) {                                        
                    elemento.innerHTML = b;                                     
                });

            //Se asigna a value la estructura con los valores que se van modifiando para la sombra de la caja.
           const value = ` ${valueSliderWidth}px ${valueSliderHeight}px ${valueSliderRadius}px ${valueSliderPropagation}px rgb(${r}, ${g}, ${b}, ${valueSliderOpacity})`;
           //Se asigna a colorRgba la estructura de los colores que se van modifiando para el color de la caja.
           const colorRgba = ` rgb(${r}, ${g}, ${b}, ${valueSliderOpacity})`;
           
           //Se asignan las constantes al style de la caja (color y sombra). 
            caja.style.color = colorRgba;
            caja.style.boxShadow = value;

            //Se colocan los valores actuales del Input tipo Color al Input tipo text para que se vean reflejados en texto.
           document.getElementById('shadowColorInputText').value = e.target.value;
        });

        //InputText ShadowColor
            //Elemento Input tipo text para definir el color del la sombra.
            
        const shadowColorInputText= document.getElementById('shadowColorInputText');
        shadowColorInputText.addEventListener('input', e => {

            //Valor del Slider (Barra).
           const valueSliderOpacity = sliderOpacity.value*0.01;
           //Valor del SliderWidth (Barra).
           const valueSliderWidth = sliderWidth.value;
           //Valor del SliderHeight (Barra).
           const valueSliderHeight = sliderHeight.value;
           //Valor del SliderRadius (Barra).
           const valueSliderRadius = sliderRadius.value;
           //Valor del SliderPropagation (Barra).
           const valueSliderPropagation = sliderPropagation.value;

            //Asignacion del valor target a const color donde color es una string como -> ("#a5a8b1")
            const color = e.target.value;
            
            //El valor 1 y 2 del string corresponden al valor exadecimal del color red, 3 y 4 corresponde a color green, 5 y 6 corresponden a color blue
            const red = color[1]+color[2];
            const green = color[3]+color[4];
            const  blue= color[5]+color[6];
            
            //Los string se convierten en numeros base 16
            const r = parseInt(red,16);
            const g = parseInt(green,16);
            const b = parseInt(blue,16);

            //para cada elemto con la clase valueRedClass se le asigna el valor de r
            valueRedClass.forEach(function(elemento, indice, array) {                                        
                elemento.innerHTML = r;                                     
            });
            //para cada elemto con la clase valueGreenClass se le asigna el valor de g
            valueGreenClass.forEach(function(elemento, indice, array) {                                        
                elemento.innerHTML = g;                                     
            });
            //para cada elemto con la clase valueBluenClass se le asigna el valor de b
            valueBlueClass.forEach(function(elemento, indice, array) {                                        
                elemento.innerHTML = b;                                     
            });

            //Se asigna a value la estructura con los valores que se van modifiando para la sombra de la caja.
           const value = ` ${valueSliderWidth}px ${valueSliderHeight}px ${valueSliderRadius}px ${valueSliderPropagation}px rgb(${r}, ${g}, ${b}, ${valueSliderOpacity})`;
            //Se asigna a colorRgba la estructura de los colores que se van modifiando para el color de la caja.
            const colorRgba = ` rgb(${r}, ${g}, ${b}, ${valueSliderOpacity})`;

            //Se asignan las constantes al style de la caja (color y sombra). 
            caja.style.color = colorRgba;
            caja.style.boxShadow = value;

            //Se colocan los valores actuales del Input tipo text al Input tipo color para que se vea reflejado el color en el input.
            document.getElementById('shadowcolorInputColor').value = e.target.value;  
        });

    }, []);

    
    

    return (
    <>
        <div className="fondo" id="fondo">
            <div className="center-container">´
            <h3 className="tittleName">SHADOW MAKER</h3>
                    <div className="container">
                        <div className="box box-l">
                            <div className="caja-slider">
                                <div className="caja-content">  
                                <span> Background Color:    </span>
                                    <input className="inputColor" type="color" defaultValue="#ffffff"  id="backColorInputColor" />
                                    <input className="inputText" type="text" placeholder="#ffffff" id="backColorInputText"/>
                                </div>
                            </div>
                            <div className="caja-slider">
                                <div className="caja-content">  
                                    <span> Box Color:    </span>
                                    <input className="inputColor" defaultValue="#f5f5f5" type="color"  id="boxColorInputColor" />
                                    <input className="inputText" type="text" placeholder="#f5f5f5" id="boxColorInputText"/>
                                </div>
                            </div>
                            <div className="caja-slider">
                                <div className="caja-content">  
                                    <span> Shadow Color:    </span>
                                    <input className="inputColor" defaultValue="#2a4fb4" type="color"  id="shadowcolorInputColor" />
                                    <input className="inputText" type="text" placeholder="#2a4fb478" id="shadowColorInputText"/>
                                </div>
                            </div>
                            
                            <RangeBar 
                                id={"myRangeOpacity"}
                                name={'Opacity:'}
                                valueMin={0}
                                valueMax={100}
                                valueDefault={60}
                                valueDown={"valueOpacityDown"}
                                nameClass={'.valueOpacityClass'}
                            />
                            <RangeBar 
                                id={"myRangeWidth"}
                                name={'Width:'}
                                valueMin={-200}
                                valueMax={200}
                                valueDefault={60}
                                valueDown={"widthDown"}
                                nameClass={'.widthClass'}
                            />
                            <RangeBar 
                                id={"myRangeHeight"}
                                name={'Height:'}
                                valueMin={-200}
                                valueMax={200}
                                valueDefault={60}
                                valueDown={"heightDown"}
                                nameClass={'.heightClass'}
                            />
                            <RangeBar 
                                id={"myRangeRadius"}
                                name={'Shadow radius:'}
                                valueMin={0}
                                valueMax={200}
                                valueDefault={120}
                                valueDown={"radiusDown"}
                                nameClass={'.shadowRadiusClass'}
                            />
                            <RangeBar 
                                id={"myRangePropagation"}
                                name={'Propagation radius:'}
                                valueMin={-200}
                                valueMax={200}
                                valueDefault={60}
                                valueDown={"propagationDown"}
                                nameClass={'.progationclass'}
                            />
                            
                        </div>
                        <div className="box box-r">
                            <div className="caja" id="caja">
                                <div className="caja-text">
                                    <p>-webkit-box-shadow: <span className="widthClass" id="valueWidth1">60</span>px <span className="heightClass" id="valueHeight1">60</span>px <span className="shadowRadiusClass" id="valueRadius1">60</span>px <span className="progationclass" id="valuePropagation1">60</span>px rgba(<span className="valueRedClass" id="valueRed1">42</span>, <span className="valueRedClass" id="valueGreen1">79</span>, <span className="valueBlueClass" id="valueBlue1">180</span>, <span className="valueOpacityClass" id="valueOpacity1">0.6</span>);</p>
                                       <p>-moz-box-shadow: <span className="widthClass" id="valueWidth2">60</span>px <span className="heightClass" id="valueHeight2">60</span>px <span className="shadowRadiusClass" id="valueRadius2">60</span>px <span className="progationclass" id="valuePropagation2">60</span>px rgba(<span className="valueRedClass" id="valueRed2">42</span>, <span className="valueRedClass" id="valueGreen2">79</span>, <span className="valueBlueClass" id="valueBlue2">180</span>, <span className="valueOpacityClass" id="valueOpacity2">0.6</span>);</p>
                                            <p>box-shadow: <span className="widthClass" id="valueWidth3">60</span>px <span className="heightClass" id="valueHeight3">60</span>px <span className="shadowRadiusClass" id="valueRadius3">60</span>px <span className="progationclass" id="valuePropagation3">60</span>px rgba(<span className="valueRedClass" id="valueRed3">42</span>, <span className="valueRedClass" id="valueGreen3">79</span>, <span className="valueBlueClass" id="valueBlue3">180</span>, <span className="valueOpacityClass" id="valueOpacity3">0.6</span>);</p>
                                </div>
                            </div>
                        </div>

                    </div>
            </div>
       </div>
    </>
    )


    
}

export default ShadowScreen
