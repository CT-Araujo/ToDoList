import './Main.css';
import Tarefas from '../Tarefas/Tarefas';

export default function Main(){
    return(
        <div className="ContainerMain">
            <Tarefas/>
            <Tarefas/>
            <Tarefas/>
        </div>
    )
};