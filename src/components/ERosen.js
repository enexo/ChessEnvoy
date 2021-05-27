import React, {  } from 'react';
import EricRosen from './streamers/EricRosen';


const ERosen = () => (
    <div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <iframe src="https://player.twitch.tv/?channel=imrosen&parent=chessenovy.netlify.app" frameBorder="0"
                                allowFullScreen="true" scrolling="no" height="378" width="620" title="Eric Plays Chess"></iframe>
                    </div>
                </div>
                <div className="col">
                    <EricRosen/>
                </div>
            </div>
        </div>
    </div>
);

export default ERosen;
