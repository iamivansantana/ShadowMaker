import React, { useEffect } from 'react';
import RangeBar from './rangeBar/RangeBar';


const ShadowScreen = () => {

   useEffect(() => {
        //Elementos HTML
        const caja = document.getElementById('caja');
        const sliderOpacity = document.getElementById('myRangeOpacity');                
        const sliderWidth = document.getElementById('myRangeWidth');        
        const sliderHeight = document.getElementById('myRangeHeight');        
        const sliderRadius = document.getElementById('myRangeRadius');       
        const sliderPropagation = document.getElementById('myRangePropagation');        
        const valueRed1 = document.getElementById('valueRed1');
        const valueRed2 = document.getElementById('valueRed2');
        const valueRed3 = document.getElementById('valueRed3');
        const valueGreen1 = document.getElementById('valueGreen1');
        const valueGreen2 = document.getElementById('valueGreen2');
        const valueGreen3 = document.getElementById('valueGreen3');
        const valueBlue1 = document.getElementById('valueBlue1');
        const valueBlue2 = document.getElementById('valueBlue2');
        const valueBlue3 = document.getElementById('valueBlue3');

        

       //InputColor-Background Color
        const backColorInputColor= document.getElementById('backColorInputColor');
        backColorInputColor.addEventListener('input', e => {
            let background = document.getElementById('fondo');
            background.style.background = e.target.value;
            document.getElementById('backColorInputText').value = e.target.value;
        });
        //InputText-Background Color
        const backColorInputText= document.getElementById('backColorInputText');
        backColorInputText.addEventListener('input', e => {
            let background = document.getElementById('fondo');
            background.style.background = e.target.value;
            document.getElementById('backColorInputColor').value = e.target.value;
        });

        //InputColor-Box Color
       const boxColorInputColor= document.getElementById('boxColorInputColor');
       boxColorInputColor.addEventListener('input', e => {
            caja.style.background = e.target.value;
            document.getElementById('boxColorInputText').value = e.target.value;
        });
        //InputText-Box Color
        const boxColorInputText= document.getElementById('boxColorInputText');
        boxColorInputText.addEventListener('input', e => {
            caja.style.background = e.target.value;
            document.getElementById('boxColorInputColor').value = e.target.value;
        });

        //InputColor-Shadow Color
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

            const inputValue = e.target.value;

            const color = inputValue;
            const red = color[1]+color[2];
            const green = color[3]+color[4];
            const  blue= color[5]+color[6];

            const r = parseInt(red,16);
            const g = parseInt(green,16);
            const b = parseInt(blue,16);

            valueRed1.innerHTML = r;
            valueRed2.innerHTML = r;
            valueRed3.innerHTML = r;

            valueGreen1.innerHTML = g;
            valueGreen2.innerHTML = g;
            valueGreen3.innerHTML = g;

            valueBlue1.innerHTML = b;
            valueBlue2.innerHTML = b;
            valueBlue3.innerHTML = b;


           const value = ` ${valueSliderWidth}px ${valueSliderHeight}px ${valueSliderRadius}px ${valueSliderPropagation}px rgb(${r}, ${g}, ${b}, ${valueSliderOpacity})`;
           const colorRgba = ` rgb(${r}, ${g}, ${b}, ${valueSliderOpacity})`;
           
            caja.style.color = colorRgba;
            caja.style.boxShadow = value;

           document.getElementById('shadowColorInputText').value = e.target.value;
        });

        //InputText ShadowColor
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
          
            const inputValue = e.target.value;

            const color = inputValue;
            const red = color[1]+color[2];
            const green = color[3]+color[4];
            const  blue= color[5]+color[6];

            const r = parseInt(red,16);
            const g = parseInt(green,16);
            const b = parseInt(blue,16);

            valueRed1.innerHTML = r;
            valueRed2.innerHTML = r;
            valueRed3.innerHTML = r;

            valueGreen1.innerHTML = g;
            valueGreen2.innerHTML = g;
            valueGreen3.innerHTML = g;

            valueBlue1.innerHTML = b;
            valueBlue2.innerHTML = b;
            valueBlue3.innerHTML = b;

           const value = ` ${valueSliderWidth}px ${valueSliderHeight}px ${valueSliderRadius}px ${valueSliderPropagation}px rgb(${r}, ${g}, ${b}, ${valueSliderOpacity})`;
           const colorRgba = ` rgb(${r}, ${g}, ${b}, ${valueSliderOpacity})`;
           
            caja.style.color = colorRgba;
            caja.style.boxShadow = value;

            document.getElementById('shadowcolorInputColor').value = e.target.value;  
        });

    }, []);

    
    

    return (
    <>
        <div className="fondo" id="fondo">
            <div className="center-container">
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
                                    <p>-webkit-box-shadow: <span className="widthClass" id="valueWidth1">60</span>px <span className="heightClass" id="valueHeight1">60</span>px <span className="shadowRadiusClass" id="valueRadius1">60</span>px <span className="progationclass" id="valuePropagation1">60</span>px rgba(<span id="valueRed1">42</span>, <span id="valueGreen1">79</span>, <span id="valueBlue1">180</span>, <span className="valueOpacityClass" id="valueOpacity1">0.6</span>);</p>
                                       <p>-moz-box-shadow: <span className="widthClass" id="valueWidth2">60</span>px <span className="heightClass" id="valueHeight2">60</span>px <span className="shadowRadiusClass" id="valueRadius2">60</span>px <span className="progationclass" id="valuePropagation2">60</span>px rgba(<span id="valueRed2">42</span>, <span id="valueGreen2">79</span>, <span id="valueBlue2">180</span>, <span className="valueOpacityClass" id="valueOpacity2">0.6</span>);</p>
                                            <p>box-shadow: <span className="widthClass" id="valueWidth3">60</span>px <span className="heightClass" id="valueHeight3">60</span>px <span className="shadowRadiusClass" id="valueRadius3">60</span>px <span className="progationclass" id="valuePropagation3">60</span>px rgba(<span id="valueRed3">42</span>, <span id="valueGreen3">79</span>, <span id="valueBlue3">180</span>, <span className="valueOpacityClass" id="valueOpacity3">0.6</span>);</p>
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
