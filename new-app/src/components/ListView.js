import React from 'react';
import ShopItem from './ShopItem';

function ListView(props) {
    const { items } = props;
    return (
        <div className='lists'>{items.map((o, index) =>
            <ShopItem key={index}
                      itemProduct={o}
            />)}
        </div>
    );
}

export default ListView;