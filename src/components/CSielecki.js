import React, {  } from 'react';
import ChristofSielecki from './streamers/ChristofSielecki';


const CSielecki = () => (
    <div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <iframe src="https://player.twitch.tv/?channel=chessxplained&parent=localhost" frameBorder="0"
                                allowFullScreen="true" scrolling="no" height="378" width="620" title="Christof Plays Chess">
                        </iframe>
                    </div>
                </div>
                <div className="col">
                    <ChristofSielecki/>
                </div>
            </div>
        </div>
    </div>
);

export default CSielecki;
