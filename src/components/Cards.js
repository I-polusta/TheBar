import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1 className='epic'>Check out our Epic Services!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/bar.jpg'
              text='Yes we have stuff, stuff you are not gonna regret'
              label='Gallery'
              path='/Gallery'
            />
            <CardItem
              src='images/bars.jpg'
              text='This is not ending here, We match your capacity'
              label='Gallery'
              path='/Gallery'
            />
             <CardItem
              src='images/bottle.jpg'
              text='A group of friends?? CHUCK CHUCK CHUCK'
              label='Gallery'
              path='/Gallery'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/corona.jpg'
              text='We bet you need something to get rid of all your problems'
              label='Beer'
              path='/Beer'
            />
            <CardItem
              src='images/whiskey.jpg'
              text='Got a important conference we got you covered'
              label='Whisky'
              path='/Whisky'
            />
            <CardItem
              src='images/margarita.jpg'
              text='Have your first date, a martini would work'
              label='Cocktails'
              path='/CockTail'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/cigar.jpg'
              text='Got a billion deal to crack, We will give you a hand'
              label='Cigar'
              path='Sutta'
            />
            <CardItem
              src='images/peaky.jpg'
              text='Wanna know how we are, Meet our sponsors'
              label='Sponsors'
              path='Sponsors'
            />
            <CardItem
              src='images/lemon.jpg'
              text='Wanna go back to parents we got you covered'
              label='Help'
              path='/CockTail'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;