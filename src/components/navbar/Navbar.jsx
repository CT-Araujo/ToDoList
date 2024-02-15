import "./Navbar.css"
import React, { useState } from 'react';

export default function Navbar(){
    const [liClicada, setLiClicada] = useState("Home");
  
    const handleClick = (titulo) => {
      setLiClicada(titulo === liClicada ? titulo : titulo);
    };

    const [isActive, setActive] = useState(false);
    const EnableMenu = () => {
        setActive(!isActive)
    };

    return (
        <div className="container">
            <div className="header">
                <svg onClick={() => EnableMenu()}  className="Hamburguer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                    <g id="SVGRepo_iconCarrier"><path d="M4 6H20M4 12H20M4 18H20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g>
                </svg>
            </div>
            <nav className={`nav ${isActive ? 'open' : ''}`}>
                <h1 className="h1">Menu</h1>
                <ul className="nav-list">

                    <li className={`list-item ${liClicada === "Home" ? 'clicado' : ''}`} onClick={() => handleClick("Home")}>

                        <svg 
                            className="Icone" fill="#FFF" viewBox="-4.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#FFF">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> <title>home</title> <path d="M19.469 12.594l3.625 3.313c0.438 0.406 0.313 0.719-0.281 0.719h-2.719v8.656c0 0.594-0.5 1.125-1.094 1.125h-4.719v-6.063c0-0.594-0.531-1.125-1.125-1.125h-2.969c-0.594 0-1.125 0.531-1.125 1.125v6.063h-4.719c-0.594 0-1.125-0.531-1.125-1.125v-8.656h-2.688c-0.594 0-0.719-0.313-0.281-0.719l10.594-9.625c0.438-0.406 1.188-0.406 1.656 0l2.406 2.156v-1.719c0-0.594 0.531-1.125 1.125-1.125h2.344c0.594 0 1.094 0.531 1.094 1.125v5.875z"/> </g>
                        </svg>
                        <span className="titulo">Home</span>

                    </li>

                    <li className={`list-item ${liClicada === "Criar" ? 'clicado' : ''}`} onClick={() => handleClick("Criar")}>

                        <svg 
                            className="Icone" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> <path d="M6 12H18M12 6V18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g>

                        </svg>
                        <span className="titulo">Criar</span>

                    </li>

                    <li className={`list-item ${liClicada === "Perfil" ? 'clicado' : ''}`} onClick={() => handleClick("Perfil")}>

                        <svg
                            className="Icone" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> <circle cx="12" cy="6" r="4" fill="#ffffff"/> <path d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z" fill="#ffffff"/> </g>
                        </svg>
                        <span className="titulo">Perfil</span>

                    </li>
                    <li className="list-item">

                        <svg 
                            className="Icone" fill="#ffffff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 297 297"  stroke="#ffffff">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M155,6.5c-30.147,0-58.95,9.335-83.294,26.995c-2.789,2.023-3.547,5.853-1.739,8.787L92.83,79.374 c0.962,1.559,2.53,2.649,4.328,3.004c1.796,0.354,3.661-0.054,5.145-1.129c14.23-10.323,31.069-15.78,48.698-15.78 c45.783,0,83.03,37.247,83.03,83.03c0,45.783-37.247,83.03-83.03,83.03c-17.629,0-34.468-5.456-48.698-15.78 c-1.484-1.076-3.349-1.486-5.145-1.129c-1.798,0.355-3.366,1.444-4.328,3.004l-22.863,37.093 c-1.808,2.934-1.05,6.763,1.739,8.787C96.05,281.165,124.853,290.5,155,290.5c78.299,0,142-63.701,142-142S233.299,6.5,155,6.5z"/> <path d="M90.401,201.757c1.147-2.142,1.021-4.74-0.326-6.76l-15.463-23.195h93.566c12.849,0,23.302-10.453,23.302-23.302 s-10.453-23.302-23.302-23.302H74.612l15.463-23.195c1.348-2.02,1.473-4.618,0.326-6.76c-1.146-2.141-3.377-3.478-5.806-3.478 H40.019c-2.201,0-4.258,1.1-5.479,2.933L1.106,144.847c-1.475,2.212-1.475,5.093,0,7.306l33.433,50.149 c1.221,1.832,3.278,2.933,5.479,2.933h44.577C87.025,205.235,89.256,203.898,90.401,201.757z"/> </g> </g> </g> </g>
                        </svg>
                        <span className="titulo">Sair</span>
                        
                    </li>
                </ul>
            </nav>
        </div>
    )
}