import React, {  } from 'react';
import AntonioRadic from './streamers/AntonioRadic';


const ARadic = () => (
    <div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <iframe src="https://player.twitch.tv/?channel=agadmatorofficial&parent=chessenovy.netlify.app" frameBorder="0"
                                allowFullScreen="true" scrolling="no" height="378" width="620" title="Antopnio Plays Chess"></iframe>
                    </div>
                </div>
                <div className="col">
                    <AntonioRadic/>
                </div>
            </div>
        </div>
    </div>
);

export default ARadic;
