import React from "react";
import { ClientContex } from '../../MyProvider/ClientContex';

class Puzel extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        // console.log(ClientContex);
        return (
            
                <p>{ClientContex._currentValue} - from field _currentValue in obgect Provider</p>
        )
    }
}
export default Puzel;