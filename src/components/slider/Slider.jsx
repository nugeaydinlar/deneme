import React, { useState } from 'react'
import './slider.css';


function Slider() {
     
    const[Toggle,showMenu] = useState(false);
  return (
    <div>
  <div class="slider">
                <input class="slider__dot" id="slider1" type="radio" name="slider" title="slide1" checked="checked"/>
                <input class="slider__dot" type="radio" name="slider" title="slide2"/>
                <input class="slider__dot" type="radio" name="slider" title="slide3"/>
                <input class="slider__dot" type="radio" name="slider" title="slide4"/>
                <div class="slider__inner">
                  <div class="slider__body" id="slider1">
              
                    <h2 class="slider__caption">Konserler</h2>
                    <p class="slider__text">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!
                          </p>
                          <a href="/"><button class="bn632-hover bn24">Kesfet</button></a>
                  </div>
                  <div class="slider__body">
                         
                    <h2 class="slider__caption">Etkinlikler</h2>
                    <p class="slider__text">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!
                          </p>
                          <a href="/"><button class="bn632-hover bn24">Kesfet</button></a>
                  </div>
                  <div class="slider__body">
                         
                    <h2 class="slider__caption">Hatlar</h2>
                    <p class="slider__text">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!
                          </p>
                          <a href="#service"><button class="bn632-hover bn24">Kesfet</button></a>
                  </div>
                  <div class="slider__body">
                        
                    <h2 class="slider__caption">Mekanlar</h2>
                    <p class="slider__text">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!
                          </p>
                          <a href="#about"><button class="bn632-hover bn24">Kesfet</button></a>    
                  </div>
                </div>
              </div>
    </div>
  )
}

export default Slider