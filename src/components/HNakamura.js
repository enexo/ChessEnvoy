import React, {  } from 'react';
import HikaruNakamura from "./streamers/HikaruNakamura";


const HNakamura = () => (
    <div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <iframe src="https://player.twitch.tv/?channel=gmhikaru&parent=localhost" frameBorder="0"
                            allowFullScreen="true" scrolling="no" height="378" width="620" title="Hikaru Plays Chess">
                    </iframe>
                </div>
                <div className="col">
                    <HikaruNakamura/>
                </div>
            </div>
        </div>
    </div>
);

export default HNakamura;
