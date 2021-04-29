import React, {  } from 'react';
import AlexandraBotez from './streamers/AlexandraBotez';


const ABotez = () => (
    <div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <iframe src="https://player.twitch.tv/?channel=BotezLive&parent=localhost" frameBorder="0"
                                allowFullScreen="true" scrolling="no" height="378" width="620" title="Alexandra Plays Chess"></iframe>
                    </div>
                </div>
                <div className="col">
                    <AlexandraBotez/>
                </div>
            </div>
        </div>
    </div>
);

export default ABotez;
