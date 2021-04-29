import React, {  } from 'react';
import ChessNetwork from './streamers/ChessNetwork';


const CNetwork = () => (
    <div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <iframe src="https://player.twitch.tv/?channel=chessnetwork&parent=localhost" frameBorder="0"
                                allowFullScreen="true" scrolling="no" height="378" width="620" title="Jerry Plays Chess"></iframe>
                    </div>
                </div>
                <div className="col">
                    <ChessNetwork/>
                </div>
            </div>
        </div>
    </div>
);

export default CNetwork;
