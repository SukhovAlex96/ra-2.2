import React from 'react';

function ShopCard(props) {
    const { cardProduct } = props;
    return (
        <div className='card'>
            <h3 className='card-title'>{cardProduct.name}</h3>
            <h6 className='card-color'>{cardProduct.color}</h6>
            <img className='card-img' src={cardProduct.img}></img>
            <div className='card-footer'>
                <div className='card-price'>${cardProduct.price}</div>
                <div className='card-add-cart'>ADD TO CART</div>
            </div>
        </div>
    )
}

export default ShopCard;