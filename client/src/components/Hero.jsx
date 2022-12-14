import React from "react";
import { Link } from "react-router-dom";
import cardImg from "../img/card-img.jpg";
import cardImg2 from "../img/card-img2.jpg";
import cardImg3 from "../img/card-img3.jpg";

function Hero() {
  return (
    <div className='hero' id='home'>
      <div className='container-fluid'>
        <h1 className='hero-text text-center'>
          Welcome to <span>The Pantry</span>
        </h1>
        <h3>Where you will never forget another recipe</h3>
      </div>
      <div className='card-container'>
        <div className='card'>
          <img src={`${cardImg}`} alt='' />
          <h4 className='card-body'>
            Tired of scrolling through ads to find the recipe you want?
          </h4>
          <p className='pt-3'>
            With The Pantry, recipes are displayed in a simple layout. Spend
            less time looking at ads and more time cooking.
          </p>
        </div>
        <div className='card'>
          <img src={`${cardImg2}`} alt='' />
          <h4 className='card-body'>
            Having trouble finding your favorite recipe?
          </h4>
          <p className='pt-3'>
            Not anymore. This will be your one stop for discovering new recipes
            and saving your favorites.
          </p>
        </div>
        <div className='card'>
          <img src={`${cardImg3}`} alt='' />
          <h4 className='card-body'>Got a great recipe you'd like to share?</h4>
          <p className='pt-3'>
            Here you can share your recipes with others so they too can enjoy
            some great food!
          </p>
        </div>
      </div>
      <h1>Are you ready to get started?</h1>
      <div className='flex-container'>
        <button className='btn-primary'>
          <Link to='/register'>Sign Up</Link>
        </button>
        <button className='btn-primary'>
          <Link to='/login'>Log In</Link>
        </button>
      </div>
    </div>
  );
}

export default Hero;
