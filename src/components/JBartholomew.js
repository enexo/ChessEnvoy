import React, {  } from 'react';
import JohnBartholomew from './streamers/JohnBartholomew';


const JBartholomew = () => (
    <div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <iframe src="https://player.twitch.tv/?channel=JohnBartholomew&parent=localhost" frameBorder="0"
                                allowFullScreen="true" scrolling="no" height="378" width="620" title="John Plays Chess"></iframe>
                    </div>
                </div>
                <div className="col">
                    <JohnBartholomew/>
                </div>
            </div>
        </div>
    </div>
);

export default JBartholomew;
