import { useContext } from "react";
import { ClientContex } from '../../MyProvider/ClientContex';

function Ball() {
    let ClientUseContex = useContext(ClientContex);
    return (
        <div>
            <p>{ClientUseContex} - from useContext</p> 
        </div>
    )
}
export default Ball;