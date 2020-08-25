import React from 'react';
import { Card } from '../card';
import { CARD_DATA } from '../../data/card-data';

import './content.css';

export class App extends React.Component {
  render() {
    return (
      <section className='content'>
        <h1 className='content__title'>Ты сегодня покормил кота?</h1>
        <div className='content__container'>
          {CARD_DATA.map(item => {
            return (<Card 
              title={item.title}
              weight={item.weight}
              portionNumber={item.portionNumber}
              mouseNumber={item.mouseNumber}
              description={item.description}
              emptyText={item.emptyText}
              empty={item.empty}
              satisfied={item.satisfied}
              key={item.title}
            />)
          })}
        </div>
      </section>
    )
  }
}