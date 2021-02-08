import React, {  } from 'react';
import StreamerList from '../components/StreamerList';
import JohnBartholomew from './streamers/JohnBartholomew';


const JBartholomew = () => (
    <div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <StreamerList/>
                </div>
                <div className="col">
                    <JohnBartholomew/>
                </div>
            </div>
        </div>
    </div>
);

export default JBartholomew;