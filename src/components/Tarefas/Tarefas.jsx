import { useState } from "react";
import "./Tarefas.css";

export default function Tarefas(){
    const [isRead, setRead] = useState(true);
    const ReadMore = () => {
        setRead(!isRead)
    };

    const [isState, setState] = useState(true);
    const ChangeState = () => {
        console.log('Clicou')
        setState(!isState)
    };
    
    const [isChecked, setChecked] = useState(false);
    const Checked = () => {
        setChecked(!isChecked)
    } 
    return (
        <div className={`containerTarefas ${isRead ? "" : "Read"} ${isChecked? "Completa" : ""}`}>
            <div className="headerTarefas">
                <span className="tituloTask">Titulo</span>
                <div className="Svgtask">
                    {isState ?  
                        (
                            <svg 
                                className='ReadIcon' onClick={() => {ReadMore(); ChangeState();}}  viewBox="0 0 1024 1024" fill="#ffffff" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                                <g id="SVGRepo_iconCarrier">
                                <path d="M478.312 644.16c24.38 26.901 64.507 26.538 88.507-0.89l270.57-309.222c7.758-8.867 6.86-22.344-2.008-30.103-8.866-7.759-22.344-6.86-30.103 2.007L534.71 615.173c-7.202 8.231-17.541 8.325-24.782 0.335L229.14 305.674c-7.912-8.73-21.403-9.394-30.133-1.482s-9.394 21.403-1.482 30.134l280.786 309.833z" fill=""/>
                                </g>
                            </svg> ) : 
                        (
                            <svg 
                                className='ReadIcon'  onClick={() => {ReadMore(); ChangeState();}} viewBox="0 0 1024 1024" fill="#fff" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                                <g id="SVGRepo_iconCarrier">
                                <path d="M509.928 387.16c7.24-7.991 17.58-7.898 24.782 0.333l270.568 309.222c7.759 8.867 21.237 9.765 30.103 2.007 8.867-7.759 9.766-21.237 2.007-30.103L566.82 359.397c-24-27.429-64.127-27.792-88.507-0.89L197.526 668.342c-7.912 8.73-7.249 22.221 1.482 30.133 8.73 7.912 22.221 7.249 30.133-1.482L509.928 387.16z" fill=""/>
                                </g>
                            </svg>
                        )
                    }
                </div>
            </div>

            <div className="bodyTarefas">
                <p className="Descricao">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci architecto reprehenderit autem nobis beatae labore sapiente totam doloremque eum culpa deserunt qui error ab vero praesentium, nisi rerum reiciendis illo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit similique quos ad aut neque nulla sed officia quia voluptates unde et, inventore modi numquam voluptatem atque beatae repellat at architecto?
                </p>
                <div className="Icones">
                    <div>
                        <svg 
                            className='iconesTarefas' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> <path d="M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g>
                        </svg>

                        <svg 
                            className='iconesTarefas' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#fffffff" stroke="#fffffff">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> <title/> <g id="Complete"> <g id="edit"> <g> <path d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/> <polygon fill="none" points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/> </g> </g> </g> </g>
                        </svg>
                    </div>

                    <div onClick={Checked}>
                        {!isChecked? (
                            <svg
                                className='iconesTarefas'  id="Check"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                                <g id="SVGRepo_iconCarrier"> <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g>
                            </svg> ) : (
                            <svg className='iconesTarefas' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                                <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                                <g id="SVGRepo_iconCarrier"> <path d="M6 6L18 18M18 6L6 18" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>

                            </svg>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};