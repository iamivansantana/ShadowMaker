import React, { useEffect } from 'react';
import RangeBar from './rangeBar/RangeBar';


const ShadowScreen = () => {

   useEffect(() => {
        //Elementos HTML
        const caja = document.getElementById('caja');

        const sliderOpacity = document.getElementById('myRangeOpacity');
        const valueOpacity = document.getElementById('valueOpacity');
        const valueOpacity1 = document.getElementById('valueOpacity1');
        const valueOpacity2 = document.getElementById('valueOpacity2');
        const valueOpacity3 = document.getElementById('valueOpacity3');
        
        const sliderWidth = document.getElementById('myRangeWidth');
        const valueWidth = document.getElementById('valueWidth');
        const valueWidth1 = document.getElementById('valueWidth1');
        const valueWidth2 = document.getElementById('valueWidth2');
        const valueWidth3 = document.getElementById('valueWidth3');

        const sliderHeight = document.getElementById('myRangeHeight');
        const valueHeight = document.getElementById('valueHeight');
        const valueHeight1 = document.getElementById('valueHeight1');
        const valueHeight2 = document.getElementById('valueHeight2');
        const valueHeight3 = document.getElementById('valueHeight3');

        const sliderRadius = document.getElementById('myRangeRadius');
        const valueRadius  = document.getElementById('valueRadius');
        const valueRadius1 = document.getElementById('valueRadius1');
        const valueRadius2 = document.getElementById('valueRadius2');
        const valueRadius3 = document.getElementById('valueRadius3');

        const sliderPropagation = document.getElementById('myRangePropagation');
        const valuePropagation  = document.getElementById('valuePropagation');
        const valuePropagation1 = document.getElementById('valuePropagation1');
        const valuePropagation2 = document.getElementById('valuePropagation2');
        const valuePropagation3 = document.getElementById('valuePropagation3');

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
        
    //Function for sliders
        const mySliders = () => {
            const caja = document.getElementById('caja');

            const sliderOpacityBar = document.getElementById('myRangeOpacity');
            const sliderOpacity = document.getElementById('myRangeOpacity').value;
            const sliderOpacityMin = document.getElementById('myRangeOpacity').min;
            const sliderOpacityMax = document.getElementById('myRangeOpacity').max;

            const sliderWidthBar = document.getElementById('myRangeWidth');
            const sliderWidth = document.getElementById('myRangeWidth').value;
            const sliderWidthMin = document.getElementById('myRangeWidth').min;
            const sliderWidthMax = document.getElementById('myRangeWidth').max;

            const sliderHeightBar = document.getElementById('myRangeHeight');
            const sliderHeight = document.getElementById('myRangeHeight').value;
            const sliderHeightMin = document.getElementById('myRangeHeight').min;
            const sliderHeightMax = document.getElementById('myRangeHeight').max;

            const sliderRadiusBar = document.getElementById('myRangeRadius');
            const sliderRadius = document.getElementById('myRangeRadius').value;
            const sliderRadiusMin = document.getElementById('myRangeRadius').min;
            const sliderRadiusMax = document.getElementById('myRangeRadius').max;

            const sliderPropagationBar = document.getElementById('myRangePropagation');
            const sliderPropagation = document.getElementById('myRangePropagation').value;
            const sliderPropagationMin = document.getElementById('myRangePropagation').min;
            const sliderPropagationMax = document.getElementById('myRangePropagation').max;


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
            
            //sliderBarOpacityColor
            //Porcentaje entre Min(-200) y Max(200)
            var porcentaje = ((sliderOpacity - sliderOpacityMin) / (sliderOpacityMax - sliderOpacityMin) * 100 ); 
            var colorBarra = `linear-gradient(90deg, rgb(117, 241, 252) ${porcentaje}%,rgb(214, 214, 214)${porcentaje}%)`;
            sliderOpacityBar.style.background = colorBarra;
            
            // sliderBarWithColor
            //Porcentaje entre Min(-200) y Max(200)
            const porcentajeWith = ((sliderWidth - sliderWidthMin) / (sliderWidthMax - sliderWidthMin) * 100 ); 
            const colorBarraWith = `linear-gradient(90deg, rgb(117, 241, 252) ${porcentajeWith}%,rgb(214, 214, 214)${porcentajeWith}%)`;
            sliderWidthBar.style.background = colorBarraWith;
            
            // sliderBarWithColor
            //Porcentaje entre Min(-200) y Max(200)
            const porcentajeHeight = ((sliderHeight - sliderHeightMin) / (sliderHeightMax - sliderHeightMin) * 100 ); 
            const colorBarraHeight = `linear-gradient(90deg, rgb(117, 241, 252) ${porcentajeHeight}%,rgb(214, 214, 214)${porcentajeHeight}%)`;
            sliderHeightBar.style.background = colorBarraHeight;
            
            // sliderBarShadowRadiusColor
            //Porcentaje entre Min(0) y Max(200)
            const porcentajeRadius = ((sliderRadius - sliderRadiusMin) / (sliderRadiusMax - sliderRadiusMin) * 100 ); 
            const colorBarraRadius = `linear-gradient(90deg, rgb(117, 241, 252) ${porcentajeRadius}%,rgb(214, 214, 214)${porcentajeRadius}%)`;
            sliderRadiusBar.style.background = colorBarraRadius;
            
            // sliderBarPropagationRadiusColor
            //Porcentaje entre Min(-200) y Max(200)
            const porcentajePropagation = ((sliderPropagation - sliderPropagationMin) / (sliderPropagationMax - sliderPropagationMin) * 100 ); 
            const colorBarraPropagation = `linear-gradient(90deg, rgb(117, 241, 252) ${porcentajePropagation}%,rgb(214, 214, 214)${porcentajePropagation}%)`;
            sliderPropagationBar.style.background = colorBarraPropagation;
            
            const value = ` ${valueSliderWidth}px ${valueSliderHeight}px ${valueSliderRadius}px ${valueSliderPropagation}px rgb(${r}, ${g}, ${b}, ${valueSliderOpacity})`;
            const colorRgba = ` rgb(${r}, ${g}, ${b}, ${valueSliderOpacity})`;         
            caja.style.color = colorRgba;
            caja.style.boxShadow = value;

        };

       
    //Slider-Opacity        
        valueOpacity.innerHTML = sliderOpacity.value*.01;
        valueOpacity1.innerHTML = sliderOpacity.value*.01;
        valueOpacity2.innerHTML = sliderOpacity.value*.01;
        valueOpacity3.innerHTML = sliderOpacity.value*.01;

        sliderOpacity.oninput = function(){
            //Asignacion del valor del slider a la caja de texto
            const valueDecimal = this.value*.01;

            valueOpacity.innerHTML  = valueDecimal.toFixed(2);
            valueOpacity1.innerHTML = valueDecimal.toFixed(2);
            valueOpacity2.innerHTML = valueDecimal.toFixed(2);
            valueOpacity3.innerHTML = valueDecimal.toFixed(2);
        }
        
        document.getElementById('myRangeOpacity').addEventListener('input',mySliders);
       

    //Slider-Width 
            //Asignacion del valor del slider a la caja de texto
        valueWidth.innerHTML =  sliderWidth.value;
        valueWidth1.innerHTML = sliderWidth.value;
        valueWidth2.innerHTML = sliderWidth.value;
        valueWidth3.innerHTML = sliderWidth.value;
        sliderWidth.oninput = function(){
            //Asignacion del valor del slider a la caja de texto
            valueWidth.innerHTML = this.value;
            valueWidth1.innerHTML = this.value;
            valueWidth2.innerHTML = this.value;
            valueWidth3.innerHTML = this.value;
        }
        document.getElementById('myRangeWidth').addEventListener('input',mySliders);
        
        
    //Slider-Height 
            //Asignacion del valor del slider a la caja de texto
        valueHeight.innerHTML  = sliderHeight.value;
        valueHeight1.innerHTML = sliderHeight.value;
        valueHeight2.innerHTML = sliderHeight.value;
        valueHeight3.innerHTML = sliderHeight.value;

        sliderHeight.oninput = function(){
            //Asignacion del valor del slider a la caja de texto
            valueHeight.innerHTML = this.value;
            valueHeight1.innerHTML = this.value;
            valueHeight2.innerHTML = this.value;
            valueHeight3.innerHTML = this.value;
        }
        document.getElementById('myRangeHeight').addEventListener('input',mySliders);
        

    //Slider-ShadowRadius 
            //Asignacion del valor del slider a la caja de texto
        valueRadius.innerHTML =  sliderRadius.value;
        valueRadius1.innerHTML = sliderRadius.value;
        valueRadius2.innerHTML = sliderRadius.value;
        valueRadius3.innerHTML = sliderRadius.value;
        sliderRadius.oninput = function(){
            //Asignacion del valor del slider a la caja de texto
            valueRadius.innerHTML = this.value;
            valueRadius1.innerHTML = this.value;
            valueRadius2.innerHTML = this.value;
            valueRadius3.innerHTML = this.value;
        }
        document.getElementById('myRangeRadius').addEventListener('input',mySliders);

    //Slider-ShadowPropagation 
            //Asignacion del valor del slider a la caja de texto
        valuePropagation.innerHTML =  sliderPropagation.value;
        valuePropagation1.innerHTML = sliderPropagation.value;
        valuePropagation2.innerHTML = sliderPropagation.value;
        valuePropagation3.innerHTML = sliderPropagation.value;
        sliderPropagation.oninput = function(){
            //Asignacion del valor del slider a la caja de texto
            valuePropagation.innerHTML = this.value;
            valuePropagation1.innerHTML = this.value;
            valuePropagation2.innerHTML = this.value;
            valuePropagation3.innerHTML = this.value;
        }
        document.getElementById('myRangePropagation').addEventListener('input',mySliders);

        

       
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
                            
                            <div className="caja-slider-slider">
                                <div className="caja-content-slider">
                                    <div className="P">
                                        <p >Opacity:</p>
                                    </div>
                                    <input type="range" min="0" max="100"  defaultValue="60" id="myRangeOpacity" className="slider"/>
                                    <div className="slider-values">
                                        <p>0</p>
                                        <p>1</p>  
                                    </div>
                                    <div className="P" style={{marginTop:'-.5rem'}}>
                                        <p>Value:  <span id="valueOpacity"></span> px</p>
                                    </div>
                                </div>
                            </div>
                            <div className="caja-slider-slider">
                                <div className="caja-content-slider">
                                    <div className="P">
                                        <p>Width:</p>
                                    </div>
                                    <input type="range" min="-200" max="200"  defaultValue="60" id="myRangeWidth" className="slider"/>
                                    <div className="slider-values">
                                        <p>-200</p>
                                        <p>200</p>  
                                    </div>
                                    <div className="P" style={{marginTop:'-.5rem'}}>
                                        <p>Value:  <span id="valueWidth"></span> px</p>
                                    </div>
                                </div>
                            </div>
                            <div className="caja-slider-slider">
                                <div className="caja-content-slider">
                                    
                                    <div className="P">
                                        <p>Height:</p>
                                    </div>
                                    <input type="range" min="-200" max="200"  defaultValue="60" id="myRangeHeight" className="slider"/>
                                    <div className="slider-values">
                                        <p>-200</p>
                                        <p>200</p>  
                                    </div>
                                    <div className="P" style={{marginTop:'-.5rem'}}>
                                        <p>Value:  <span id="valueHeight"></span> px</p>
                                    </div>
                                </div>
                            </div>
                            <div className="caja-slider-slider">
                                <div className="caja-content-slider">
                                    <div className="P">
                                        <p>Shadow radius:</p>
                                    </div>
                                    <input type="range" min="0" max="200"  defaultValue="120" id="myRangeRadius" className="slider"/>
                                    <div className="slider-values">
                                        <p>0</p>
                                        <p>200</p>  
                                    </div>
                                    <div className="P" style={{marginTop:'-.5rem'}}>
                                        <p>Value:  <span id="valueRadius"></span> px</p>
                                    </div>
                                </div>
                            </div>
                            <div className="caja-slider-slider">
                                <div className="caja-content-slider">
                                    <div className="P">
                                        <p>Propagation radius:</p>
                                    </div>
                                    <input type="range" min="-200" max="200"  defaultValue="60" id="myRangePropagation" className="slider"/>
                                    <div className="slider-values">
                                        <p>-200</p>
                                        <p>200</p>  
                                    </div>
                                    <div className="P" style={{marginTop:'-.5rem'}}>
                                        <p>Value:  <span id="valuePropagation"></span> px</p>
                                    </div>
                                </div>
                            </div>
                            <RangeBar 
                                id={"BarraEjemplo"}
                                name={'Ejemplo'}
                                valueMin={-100}
                                valueMax={100}
                                valueDefault={20}
                                valueDown={"Down"}
                            />
                            
                        </div>
                        <div className="box box-r">
                            <div className="caja" id="caja">
                                <div className="caja-text">
                                    <p>-webkit-box-shadow: <span id="valueWidth1">60</span>px <span id="valueHeight1">60</span>px <span id="valueRadius1">60</span>px <span id="valuePropagation1">60</span>px rgba(<span id="valueRed1">42</span>, <span id="valueGreen1">79</span>, <span id="valueBlue1">180</span>,<span id="valueOpacity1">0.6</span>);</p>
                                    <p>-moz-box-shadow: <span id="valueWidth2">60</span>px <span id="valueHeight2">60</span>px <span id="valueRadius2">60</span>px <span id="valuePropagation2">60</span>px rgba(<span id="valueRed2">42</span>, <span id="valueGreen2">79</span>, <span id="valueBlue2">180</span>,<span id="valueOpacity2">0.6</span>);</p>
                                            <p>box-shadow: <span id="valueWidth3">60</span>px <span id="valueHeight3">60</span>px <span id="valueRadius3">60</span>px <span id="valuePropagation3">60</span>px rgba(<span id="valueRed3">42</span>, <span id="valueGreen3">79</span>, <span id="valueBlue3">180</span>,<span id="valueOpacity3">0.6</span>);</p>
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
