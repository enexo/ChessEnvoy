import React, {  } from 'react';
import StreamerList from '../components/StreamerList';
import AlexandraBotez from './streamers/AlexandraBotez';


const ABotez = () => (
    <div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <StreamerList/>
                </div>
                <div className="col">
                    <AlexandraBotez/>
                </div>
            </div>
        </div>
    </div>
);

export default ABotez;