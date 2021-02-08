import React, {  } from 'react';
import StreamerList from '../components/StreamerList';
import LevyRozman from './streamers/LevyRozman';


const LRozman = () => (
    <div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <StreamerList/>
                </div>
                <div className="col">
                    <LevyRozman/>
                </div>
            </div>
        </div>
    </div>
);

export default LRozman;