import React from 'react';

function IconSwitch(props) {
    const { icon, onSwitch } = props;
    return (
        <div className = "material-icons" onClick={onSwitch}>{icon}</div>
    )
}

export default IconSwitch;