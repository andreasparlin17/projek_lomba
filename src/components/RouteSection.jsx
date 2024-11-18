import React, { useState } from 'react';
import RouteCard from './RouteCard';

const RouteSection = () => {
    const [activeRoute, setActiveRoute] = useState('default'); // Active route for clicks
    const [hoveredRoute, setHoveredRoute] = useState(null); // Hovered route for PCs
    const [zoomLevel, setZoomLevel] = useState(1); // Zoom level
    const [offset, setOffset] = useState({ x: 0, y: 0 }); // Drag position
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    const routeImages = {
        default: '/assets/Default-Map.svg',
        '1D': '/assets/1D-Map.svg',
        '2D': '/assets/2D-Map.svg',
        '3D': '/assets/3D-Map.svg',
        '4D': '/assets/4D-Map.svg',
        '5D': '/assets/5D-Map.svg',
    };

    const zoomIn = () => setZoomLevel((prevZoom) => Math.min(3, prevZoom + 0.1));
    const zoomOut = () => setZoomLevel((prevZoom) => Math.max(1, prevZoom - 0.1));

    const handleDragStart = (e) => {
        e.preventDefault();
        setIsDragging(true);
        setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    };

    const handleDragMove = (e) => {
        if (!isDragging) return;
        setOffset({
            x: e.clientX - dragStart.x,
            y: e.clientY - dragStart.y,
        });
    };

    const handleDragEnd = () => setIsDragging(false);

    const handleCardClick = (code) => {
        setActiveRoute((prev) => (prev === code ? 'default' : code));
    };

    const displayedRoute = activeRoute !== 'default' ? activeRoute : hoveredRoute || 'default';

    return (
        <div className="relative lg:w-[65%] md:w-[80%] w-[90%] bg-[#272727] shadow-card-shadow mb-6 lg:rounded-[50px] md:rounded-3xl rounded-xl xl:overflow-hidden py-4 px-12 h-full gap-10 flex flex-col">
            <div className="w-full flex justify-between items-center">
                <h3 className="font-bold text-3xl">Rute Trans Metro Pasundan</h3>
                <img
                    src="/assets/logoTransMetroPasundan.png"
                    alt="Trans Metro Pasundan"
                    className="aspect-[118/79] w-1/12"
                />
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="w-full flex flex-row gap-4 justify-center flex-wrap xl:mb-10">
                    {['1D', '2D', '3D', '4D', '5D'].map((route) => (
                        <RouteCard
                            key={route}
                            code={route}
                            color={{
                                '1D': 'yellow',
                                '2D': 'red',
                                '3D': 'purple',
                                '4D': 'blue',
                                '5D': 'pink',
                            }[route]}
                            from={{
                                '1D': 'Leuwipanjang',
                                '2D': 'IKEA Kota Baru Parahyangan',
                                '3D': 'Baleendah',
                                '4D': 'Leuwipanjang',
                                '5D': 'UNPAD Dipatiukur',
                            }[route]}
                            to={{
                                '1D': 'RSUD Otto Iskandar Dinata',
                                '2D': 'Alun-alun Bandung',
                                '3D': 'Bandung Electronic Center (BEC)',
                                '4D': 'UNPAD Dipatiukur',
                                '5D': 'UNPAD Jatinangor',
                            }[route]}
                            onMouseEnter={() => setHoveredRoute(route)}
                            onMouseLeave={() => setHoveredRoute(null)}
                            onClick={() => handleCardClick(route)}
                            className={`${
                                activeRoute === route ? 'border-2' : 'border-0'
                            } transition-all duration-150 hover:border-2`}
                        />
                    ))}
                </div>

                <div
                    className="relative xl:w-full w-full mt-10 xl:mt-0 xl:ml-10 mb-10 overflow-hidden bg-[#333232] rounded-2xl p-8"
                    onMouseMove={handleDragMove}
                    onMouseUp={handleDragEnd}
                    onMouseLeave={handleDragEnd}
                >
                    <img
                        src={routeImages[displayedRoute]}
                        alt="Map"
                        className="cursor-grab transition-transform duration-300"
                        style={{
                            transform: `scale(${zoomLevel}) translate(${offset.x / zoomLevel}px, ${offset.y / zoomLevel}px)`,
                            userSelect: 'none',
                        }}
                        onMouseDown={handleDragStart}
                    />
                    <div className="absolute top-4 right-4 flex flex-col items-center">
                        <button onClick={zoomIn} className="bg-white text-black p-2 rounded-full mb-2">
                            +
                        </button>
                        <button onClick={zoomOut} className="bg-white text-black p-2 rounded-full">
                            -
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RouteSection;
