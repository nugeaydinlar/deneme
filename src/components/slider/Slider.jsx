import React, { useState } from 'react'
import './slider.css';


function Slider() {
     

  return (
    <div>
  <div class="slider">
                <input class="slider__dot" id="slider1" type="radio" name="slider" title="slide1" checked="checked"/>
                <input class="slider__dot" type="radio" name="slider" title="slide2"/>
                <input class="slider__dot" type="radio" name="slider" title="slide3"/>
                <input class="slider__dot" type="radio" name="slider" title="slide4"/>
                <div class="slider__inner">
                  <div class="slider__body" id="slider1">
                    <div className="slider__container">
                    <div className="slider__firstBox">
                    <p class="text__sub">Lorem, ipsum.</p>
                    <h2 class="slider__caption"></h2>
                    <h2 class="slider__big">Etkinlikler</h2>
                    <p class="text__normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt at sint distinctio consectetur molestias numquam, alias velit dolore quidem doloribus.</p>
                          <a href="/"><button class="bn632-hover bn24">Kesfet</button></a>

                    </div>
                    <div className="slider__secondBox">

                    </div>

                    </div>
                    
              
               
                  </div>
                  <div class="slider__body" id="slider2">
                    <div className="slider__container">
                    <div className="slider__firstBox">
                    <p class="text__sub">Lorem, ipsum.</p>
                    <h2 class="slider__caption">Konserler</h2>
                    <h2 class="slider__big">Etkinlikler</h2>
                    <p class="text__normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt at sint distinctio consectetur molestias numquam, alias velit dolore quidem doloribus.</p>
                          <a href="/"><button class="bn632-hover bn24">Kesfet</button></a>

                    </div>
                    <div className="slider__secondBox">

                    </div>

                    </div>
                    
              
               
                  </div>
                  <div class="slider__body" id="slider3">
                    <div className="slider__container">
                    <div className="slider__firstBox">
                    <p class="text__sub">Lorem, ipsum.</p>
                    <h2 class="slider__caption">Konserler</h2>
                    <h2 class="slider__big">Etkinlikler</h2>
                    <p class="text__normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt at sint distinctio consectetur molestias numquam, alias velit dolore quidem doloribus.</p>
                          <a href="/"><button class="bn632-hover bn24">Kesfet</button></a>

                    </div>
                    <div className="slider__secondBox">

                    </div>

                    </div>
                    
              
               
                  </div>
                  <div class="slider__body" id="slider4">
                    <div className="slider__container">
                    <div className="slider__firstBox">
                    <p class="text__sub">Lorem, ipsum.</p>
                    <h2 class="slider__caption">Konserler</h2>
                    <h2 class="slider__big">Etkinlikler</h2>
                    <p class="text__normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt at sint distinctio consectetur molestias numquam, alias velit dolore quidem doloribus.</p>
                          <a href="/"><button class="bn632-hover bn24">Kesfet</button></a>

                    </div>
                    <div className="slider__secondBox">

                    </div>

                    </div>
                    
              
               
                  </div>
                </div>
              </div>
    </div>
  )
}

export default Slider