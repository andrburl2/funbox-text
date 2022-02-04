import React, { useState } from 'react';
import './card.css';

import catImg from '../../images/cat.png';

function Card(props) {
  const { card } = props;
  // отвечает за отбражение трех состояний: empty, exist, selected
  const [status, setStatus] = useState(card.empty ? 'empty' : 'exist');
  // отвечает за изменение текста выбранного продукта 
  const [mouseOnCancel, setmouseOnCancel] = useState(false);

  const changeStatus = () => {
    if (status === 'empty') {
      return
    }

    status === 'exist' ? setStatus('selected') : setStatus('exist');

    setmouseOnCancel(false);
  };

  const mouseOnCancelEnter = () => {
    // когда наводим мышь на уже выбранный продукт,
    // то текст описания меняется
    if (status === 'selected') {
      setmouseOnCancel(true)
    }
  }

  const mouseOnCancelLeave = () => {
    // когда убираем мышь, то меняем текст описания обратно
    if (status === 'selected') {
      setmouseOnCancel(false)
    }
  }

  return (
    <div className={`card ${status === 'empty' ? 'card_empty' : ''} ${status === 'selected' ? 'card_selected' : ''}`}>

      <div className='card__content' onClick={changeStatus} onMouseEnter={mouseOnCancelEnter} onMouseLeave={mouseOnCancelLeave}>
        <p className={`card__description ${mouseOnCancel ? 'card__description_cancel' : ''}`}>
          {mouseOnCancel ? 'Котэ не одобяет?' : 'Сказочное заморское яство'}
        </p>

        <h2 className='card__title'>
          Нямушка <br />
          <span className='card__product-name'>{card.title}</span>
        </h2>

        <p className='card__subtitle'>
          <b>{card.portionNumber}</b> порций<br />
          <b>{card.mouseNumber}</b> в подарок<br />
          { card.satisfied ? 'заказчик доволен' : '' }
        </p>

        <div className='card__circle'>
          <p className='card__weight'>{card.weight}</p>
          <p className='card__weight card__weight_font_small'>кг</p>
        </div>

        <img className='card__cat' src={catImg} alt='Милый котик' />
      </div>

      {status === 'empty' ?
        <p className='card__text card__text_color_yellow'>{card.emptyText}</p>
        :
        status === 'selected' ?
          <p className='card__text card__text_color_yellow'>{card.description}</p>
          :
          <p className='card__text'>
            Чего сидишь? Порадуй котэ,&ensp;
            <button className='card__button' onClick={changeStatus}>купи</button>.
          </p>
      }
    </div>
  )
}

export default Card;