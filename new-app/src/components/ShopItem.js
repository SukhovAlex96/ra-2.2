import React from 'react';

function ShopItem(props) {
    const { itemProduct } = props;
    return (
        <div className='list'>
            <img className='list-img' src={itemProduct.img}></img>
            <h3 className='list-title'>{itemProduct.name}</h3>
            <h6 className='list-color'>{itemProduct.color}</h6>
            <h6 className='list-price'>${itemProduct.price}</h6>
            <button className='list-add-cart'>ADD TO CART</button>
        </div>
    )
}

export default ShopItem;