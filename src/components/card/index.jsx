import React from 'react';
import './card.css';

import catImg from '../../images/cat.png';

export class Card extends React.Component {
  render() {
    const { title, portionNumber, mouseNumber, weight, description, emptyText, empty, satisfied } = this.props;

    return (
      <div className="card">
        <div
          className={empty ? 'card__content card__content_disabled' : 'card__content'}
          onClick={(e) => this.selectCard(e)}
          onMouseEnter={this.changeDescription}
          onMouseLeave={this.returnDescription}
        >
          <div className={empty ? 'card__corner card__corner_disabled' : 'card__corner'}></div>

          <p className={empty ? 'card__description card__description_disabled' : 'card__description'}>Сказочное заморское яство</p>
          <h2 className={empty ? 'card__title card__title_disabled' : 'card__title'}>Нямушка <span className="card__product-name">{title}</span></h2>
          <p className={empty ? 'card__subtitle card__subtitle_disabled' : 'card__subtitle'}><b>{portionNumber}</b> порций</p>
          <p className={empty ? 'card__subtitle card__subtitle_disabled' : 'card__subtitle'}>{mouseNumber} в подарок</p>
          {satisfied ? <p className={empty ? 'card__subtitle card__subtitle_disabled' : 'card__subtitle'}>заказчик доволен</p> : null}

          <div className={empty ? 'card__circle card__circle_disabled' : 'card__circle'}>
            <p className="card__weight">{weight}</p>
            <p className="card__weight card__weight_font_small">кг</p>  
          </div>

          <img src={catImg} alt="Милый котик" className={empty ? 'card__cat card__cat_disabled' : 'card__cat'}/>
        </div>

        <p className={empty ? 'card__text_hidden' : 'card__text card__text_value_buy'}>Чего сидишь? Порадуй котэ, <button className="card__button" onClick={(e) => this.selectCard(e)}>купи</button>.</p>
        <p className="card__text card__text_value_info card__text_hidden">{description}</p>
        <p className={empty ? 'card__text card__text_value_empty' : 'card__text_hidden'}>{emptyText}</p>
      </div>
    )
  }

  selectCard(event) {
    const card = event.target.closest('.card');

    if (card.querySelector('.card__content').classList.contains('card__content_disabled')) {
      return;
    }

    if (!event.target.classList.contains('card__button')) {
      this.returnDescription(event);
    }

    card.querySelector('.card__content').classList.toggle('card__content_selected');
    card.querySelector('.card__corner').classList.toggle('card__corner_selected');
    card.querySelector('.card__circle').classList.toggle('card__circle_selected');

    card.querySelector('.card__text_value_buy').classList.toggle('card__text_hidden');
    card.querySelector('.card__text_value_info').classList.toggle('card__text_hidden');
  }

  changeDescription(event) {
    if (!event.target.closest('.card__content').classList.contains('card__content_selected')) {
      return
    }

    const text = event.target.closest('.card__content').querySelector('.card__description');

    text.classList.add('card__description_active');
    text.textContent = 'Котэ не одобряет?';
  }

  returnDescription(event) {
    const text = event.target.closest('.card__content').querySelector('.card__description');

    text.classList.remove('card__description_active');
    text.textContent = 'Сказочное заморское яство';
  }
}