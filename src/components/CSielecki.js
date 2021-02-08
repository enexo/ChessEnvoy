import React, {  } from 'react';
import StreamerList from '../components/StreamerList';
import ChristofSielecki from './streamers/ChristofSielecki';


const CSielecki = () => (
    <div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <StreamerList/>
                </div>
                <div className="col">
                    <ChristofSielecki/>
                </div>
            </div>
        </div>
    </div>
);

export default CSielecki;