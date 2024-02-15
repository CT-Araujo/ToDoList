import { useState } from "react"
import "./HeaderPage.css"

export default function HeaderPage(){
 
    const SelectState = () =>{
        const checkboxState = document.querySelectorAll(".BoxFilterState");
        checkboxState.forEach(element => {
            element.addEventListener('change', function(){
                checkboxState.forEach(check => {
                    if(check !== this){
                        check.checked = false;
                    }
                })
            })           
        });

    }

    const SelectDate = () => {
        const checkboxDate = document.querySelectorAll(".BoxFilterDate");
        checkboxDate.forEach(Date =>{
            Date.addEventListener('change', function(){
                checkboxDate.forEach(check => {
                    if (check !== this){
                        check.checked = false;
                    }
                })
            })
        })
    }

    const [isOpen, setOpen] = useState(false);
    const OpenClose = () =>{
        setOpen(!isOpen)
    }
    return(
        <div className="HeaderPage">
            <div className="Object">

                <h1 className="Page">Home</h1>

                <div className="FilterContainer" onClick={OpenClose}>

                    <div id="FilterReadContainer">
                        <svg className='Filter_Read' viewBox="0 0 1024 1024" fill="#ffffff" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                            <g id="SVGRepo_iconCarrier">
                            <path d="M478.312 644.16c24.38 26.901 64.507 26.538 88.507-0.89l270.57-309.222c7.758-8.867 6.86-22.344-2.008-30.103-8.866-7.759-22.344-6.86-30.103 2.007L534.71 615.173c-7.202 8.231-17.541 8.325-24.782 0.335L229.14 305.674c-7.912-8.73-21.403-9.394-30.133-1.482s-9.394 21.403-1.482 30.134l280.786 309.833z" fill=""/>
                            </g>
                        </svg> 
                    </div>

                    <svg className="Filter" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <path d="M4.22657 2C2.50087 2 1.58526 4.03892 2.73175 5.32873L8.99972 12.3802V19C8.99972 19.3788 9.21373 19.725 9.55251 19.8944L13.5525 21.8944C13.8625 22.0494 14.2306 22.0329 14.5255 21.8507C14.8203 21.6684 14.9997 21.3466 14.9997 21V12.3802L21.2677 5.32873C22.4142 4.03893 21.4986 2 19.7729 2H4.22657Z" fill="#ffffff"/> </g>
                    </svg>
                    
                </div>
            </div>

            <div className={`MainFilter ${!isOpen ? "" : "Open"}`}>
                <span>Tarefas:</span>
                <div className="DivFilter">

                    <input className="BoxFilterState" type="checkbox" value={"Todas"} id="Todas" name="Estado" onClick={SelectState} checked/>
                    <label className="LabelFilter" htmlFor="Todas">Todas</label> <br></br>

                    <input className="BoxFilterState" type="checkbox" value={"Imcompletas"} id="Imcompletas" name="Estado" onClick={SelectState}/>
                    <label className="LabelFilter" htmlFor="Imcompletas">Imcompletas</label> <br></br>

                    <input className="BoxFilterState" type="checkbox" value={"Completas"} id="Completas" name="Estado" onClick={SelectState} />
                    <label  className="LabelFilter" htmlFor="Completas">Completas</label>

                </div>
                <span>Data:</span>
                <div  className="DivFilter" >

                    <input className="BoxFilterDate" type="checkbox" value={"Descrescente"} id="Descrescente" name="Data" checked onClick={SelectDate}/>
                    <label  className="LabelFilter" htmlFor="Descrescente">Descrescente</label> <br></br>

                    <input className="BoxFilterDate" type="checkbox" value={"Crescente"} id="Crescente" name="Data"onClick={SelectDate} />
                    <label  className="LabelFilter" htmlFor="Crescente">Crescente</label>

                </div>
            </div>
        </div>
    )
    }