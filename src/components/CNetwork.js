import React, {  } from 'react';
import StreamerList from '../components/StreamerList';
import ChessNetwork from './streamers/ChessNetwork';


const CNetwork = () => (
    <div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <StreamerList/>
                </div>
                <div className="col">
                    <ChessNetwork/>
                </div>
            </div>
        </div>
    </div>
);

export default CNetwork;