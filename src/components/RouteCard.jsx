import React from 'react';

const RouteCard = ({ code, color, from, to, onMouseEnter, onFocus, onClick, onMouseLeave, className }) => {
    
    let backgroundColor, codeBackgroundColor;

    if (color === 'yellow') {
        backgroundColor = '#F7941D';
        codeBackgroundColor = '#E08415';
    } else if (color === 'red') {
        backgroundColor = '#ED1C24';
        codeBackgroundColor = '#C41E25';
    } else if (color === 'purple') {
        backgroundColor = '#662D91';
        codeBackgroundColor = '#542676';
    } else if (color === 'blue') {
        backgroundColor = '#2E3192';
        codeBackgroundColor = '#292B71';
    } else if (color === 'pink') {
        backgroundColor = '#EC008C';
        codeBackgroundColor = '#C00072';
    }

    return (
        <div
            className={`aspect-[220/100] w-36 lg:w-44 xl:w-52 rounded-2xl flex overflow-hidden h-20 ${className} cursor-pointer`}
            onMouseEnter={onMouseEnter}
            onFocus={onFocus}
            onClick={onClick}
            tabIndex={0}
            onMouseLeave={onMouseLeave}
        >
            <div
                className="w-1/4 h-full flex items-center justify-center font-semibold xl:font-bold text-lg xl:text-2xl"
                style={{ backgroundColor: codeBackgroundColor }}
            >
                {code}
            </div>
            <div className="w-3/4 h-full flex flex-col justify-between py-2 pl-2 xl:text-sm text-xs" style={{ backgroundColor: backgroundColor }}>
                <p className='leading-tight'>{from}</p>
                <p className='leading-tight'>{to}</p>
            </div>
        </div>
    );
};

export default RouteCard;
