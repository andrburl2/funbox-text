import React from 'react';
import './main.css';
import { CARD_DATA } from '../../data/card-data';

import Card from '../card/card';

function Main() {
  return (
    <main className='main'>
      <h1 className='main__title'>Ты сегодня покормил кота?</h1>

      <div className='main__container'>
        {CARD_DATA.map((item, index) => {
          return (
            <Card 
              card={item}
              key={index}
            />
          )
        })}
      </div>
    </main>
  )
}

export default Main;