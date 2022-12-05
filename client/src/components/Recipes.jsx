import React from "react";
import applePie from "../img/carousel/apple-pie.jpg";
import bakedZiti from "../img/carousel/baked-ziti.jpg";
import cookies from "../img/carousel/cookies.jpg";
import frenchToast from "../img/carousel/french-toast.jpg";
import potatoSoup from "../img/carousel/potato-soup.jpg";

function Recipes() {
  return (
    <div id='recipes'>
      <div className='recipes'>
        <h1 className='recipe-header'>A quick look into our recipes</h1>
        <div className='slider-container'>
          <div className='slider'>
            <div className='slides'>
              <input type='radio' name='radio-btn' id='radio1' />
              <input type='radio' name='radio-btn' id='radio2' />
              <input type='radio' name='radio-btn' id='radio3' />
              <input type='radio' name='radio-btn' id='radio4' />
              <input type='radio' name='radio-btn' id='radio5' />
              <div className='slide first'>
                <img src={`${applePie}`} alt='Apple Pie' />
                <div className='slide-info-container'>
                  <ul>
                    <h2 className='slide-header'>Ingredients</h2>
                    <li>Apple</li>
                    <li>Pie</li>
                    <li>some other stuff</li>
                    <li>some other stuff</li>
                    <li>some other stuff</li>
                  </ul>
                  <ul>
                    <h2 className='slide-header-secondary'>
                      Cooking Instructions
                    </h2>
                    <li>Cook for some time</li>
                    <li>Cook for some time</li>
                    <li>Cook for some time</li>
                    <li>Cook for some time</li>
                  </ul>
                </div>
              </div>
              <div className='slide'>
                <img src={`${bakedZiti}`} alt='Baked Ziti' />
              </div>
              <div className='slide'>
                <img src={`${cookies}`} alt='Cookies' />
              </div>
              <div className='slide'>
                <img src={`${frenchToast}`} alt='French Toast' />
              </div>
              <div className='slide'>
                <img src={`${potatoSoup}`} alt='Potato Soup' />
              </div>
              {/* Auto nav */}
              <div className='navigation-auto'>
                <div className='auto-btn1'></div>
                <div className='auto-btn2'></div>
                <div className='auto-btn3'></div>
                <div className='auto-btn4'></div>
                <div className='auto-btn5'></div>
              </div>
            </div>
            {/* Manual nav */}
            <div className='navigation-manual'>
              <label htmlFor='radio1' className='manual-btn'></label>
              <label htmlFor='radio2' className='manual-btn'></label>
              <label htmlFor='radio3' className='manual-btn'></label>
              <label htmlFor='radio4' className='manual-btn'></label>
              <label htmlFor='radio5' className='manual-btn'></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipes;
