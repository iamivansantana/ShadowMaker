import React, { useEffect } from 'react';

const ShadowScreen = () => {

   useEffect(() => {
       //Background Color
        const backColorInputColor= document.getElementById('backColorInputColor');
        backColorInputColor.addEventListener('input', e => {
            let background = document.getElementById('body');
            background.style.background = e.target.value;
            document.getElementById('backColorInputText').value = e.target.value;
        })
        const backColorInputText= document.getElementById('backColorInputText');
        backColorInputText.addEventListener('input', e => {
            let background = document.getElementById('body');
            background.style.background = e.target.value;
            document.getElementById('backColorInputColor').value = e.target.value;
        })
        //Box Color
       const boxColorInputColor= document.getElementById('boxColorInputColor');
       boxColorInputColor.addEventListener('input', e => {
            let caja = document.getElementById('caja');
            caja.style.background = e.target.value;
            document.getElementById('boxColorInputText').value = e.target.value;
        })
        const boxColorInputText= document.getElementById('boxColorInputText');
        boxColorInputText.addEventListener('input', e => {
            let background = document.getElementById('caja');
            background.style.background = e.target.value;
            document.getElementById('boxColorInputColor').value = e.target.value;
        })
       
       const slider = document.getElementById('myRange');
       const ouput = document.getElementById('value1');

       ouput.innerHTML = slider.value;

       slider.oninput = function(){
           ouput.innerHTML = this.value;
       }

       slider.addEventListener("input",function(){
           var x = ((slider.value - slider.min) / (slider.max - slider.min) * 100 ); 
           var color = `linear-gradient(90deg, rgb(117, 241, 252) ${x}%,rgb(214, 214, 214)${x}%)`;
           slider.style.background = color;
       })





       
    }, []);
    

    return (
    <>
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
                            <input className="inputColor" type="color"  id="boxcolor" />
                            <input className="inputText" type="text" id="boxcolort3"/>
                        </div>
                    </div>
                    <div className="caja-slider" style={{height: 'auto'}}>
                        <div className="caja-content flex-colum"  >
                            <input type="range" min="-200" max="200"  defaultValue="60" id="myRange" className="slider"/>
                            <div className="slider-values">
                                <p>0</p>
                                <p>200</p>  
                            </div>
                            <div className="P">
                                <p>Value:  <span id="value1"></span></p>
                            </div>
                        </div>
                    </div>
                    <div className="caja-slider">BARRA4</div>
                    <div className="caja-slider">BARRA5</div>
                    <div className="caja-slider">BARRA6</div>
                    <div className="caja-slider">
                       
                    </div>
                    <div className="caja-slider">BARRA8</div>
                </div>
                <div className="box box-r">
                    <div className="caja" id="caja">
                        <div className="caja-text">
                            <p>-webkit-box-shadow: 4px 8px 73px 5px rgba(0,0,0,0.15);</p>
                            <p>-moz-box-shadow: 4px 8px 73px 5px rgba(0,0,0,0.15);</p>
                            <p>box-shadow: 4px 8px 73px 5px rgba(0,0,0,0.15);</p>
                        </div>
                    </div>
                </div>

            </div>
       </div>
    </>
    )


    
}

export default ShadowScreen
