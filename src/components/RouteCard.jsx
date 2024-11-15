import React from 'react';

const RouteCard = ({ code, from, to, color }) => {
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
        <div className="aspect-[220/100] w-40 lg:w-48 xl:w-56 rounded-2xl flex overflow-hidden" style={{ backgroundColor }}>
            <div
                className="w-1/4 h-full flex items-center justify-center font-semibold xl:font-bold text-lg xl:text-2xl"
                style={{ backgroundColor: codeBackgroundColor }}
            >
                {code}
            </div>
            <div className=" w-3/4 h-full flex flex-col justify-between py-2 pl-2 xl:text-sm text-xs">
                <p>{from}</p>
                <p>{to}</p>
            </div>
        </div>
    );
};

export default RouteCard;