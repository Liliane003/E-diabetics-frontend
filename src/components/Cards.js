import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Choose Your Healthy Food From Here!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/dia1.jpeg'
              text='This will help you to reduce your blood sugar'
              path='/sign-up'
            />
            <CardItem
              src='images/dia2.jpeg'
              text='This will help you to reduce your blood sugar'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/dia3.jpeg'
              text='This will help you to reduce your blood sugar'
              path='/sign-up'
            />
            <CardItem
              src='images/dia4.jpeg'
              text='This will help you to reduce your blood sugar'
              path='/sign-up'
            />
            <CardItem
              src='images/dia5.jpeg'
              text='This will help you to reduce your blood sugar'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
