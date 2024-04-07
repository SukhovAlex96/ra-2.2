import React from 'react';
import ShopCard from './ShopCard';


function CardsView(props) {
    const { cards } = props;
    return (
        <div className='cards'>{cards.map((o, index) =>
            <ShopCard key={index}
                      cardProduct={o}
            />)}
        </div>
    );
}

export default CardsView;