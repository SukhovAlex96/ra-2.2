import React, { useState } from 'react';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';

function Store(props) {
    const [state, setState] = useState('view_list');
    // const icon = 'view_list';
    const { products } = props;
    const onSwitch = (evt) => {
        evt.currentTarget.innerHTML === 'view_list' ? setState('view_module') : setState('view_list')
    }
    return (
        <div className="main-content">
            <IconSwitch
                icon={state}
                onSwitch={onSwitch} />
            {state === 'view_module' ? <CardsView cards={products} /> : <ListView items={products} />}
        </div>
    );
}

export default Store;