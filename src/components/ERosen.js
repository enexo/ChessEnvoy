import React, {  } from 'react';
import StreamerList from '../components/StreamerList';
import EricRosen from './streamers/EricRosen';


const ERosen = () => (
    <div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <StreamerList/>
                </div>
                <div className="col">
                    <EricRosen/>
                </div>
            </div>
        </div>
    </div>
);

export default ERosen;