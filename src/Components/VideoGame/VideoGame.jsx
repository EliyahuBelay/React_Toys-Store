import React from 'react';
import {ClientContex} from '../../MyProvider/ClientContex';

class VideoGame extends React.Component {
    render() {
        return (
            <div>
                <p>Video game</p>
                <ClientContex.Consumer>
                    {(value)=> <h2>{value} - from Consumer</h2>}
                </ClientContex.Consumer>
            </div>
        )
    }
}
export default VideoGame;