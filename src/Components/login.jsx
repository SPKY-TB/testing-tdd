import {useContext} from 'react';
import {AppContext} from './provider';

export default () =>{
    const [state,setState] = useContext(AppContext);

    return( 
    <div>
        Nombre: <input type="text" onChange={ (e) => {setState({...state,name:e.target.value})}} />
   
        Apellidos: <input type="password" onChange={ (e) => {setState({...state,pass:e.target.value})}} />
    </div>
    );
}