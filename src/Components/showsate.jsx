import { useContext } from 'react';
import { AppContext } from './provider';

export default () => {
  const [state, setState] = useContext(AppContext);
  return ( <p>Nombre: {state.name}  Apellidos: {state.pass}</p> );
}