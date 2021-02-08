import React, {  } from 'react';
import StreamerList from '../components/StreamerList';
import AntonioRadic from './streamers/AntonioRadic';


const ARadic = () => (
    <div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <StreamerList/>
                </div>
                <div className="col">
                    <AntonioRadic/>
                </div>
            </div>
        </div>
    </div>
);

export default ARadic;