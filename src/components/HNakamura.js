import React, {  } from 'react';
import StreamerList from '../components/StreamerList';
import HikaruNakamura from "./streamers/HikaruNakamura";


const HNakamura = () => (
    <div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <StreamerList/>
                </div>
                <div className="col">
                    <HikaruNakamura/>
                </div>
            </div>
        </div>
    </div>
);

export default HNakamura;