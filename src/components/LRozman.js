import React, {  } from 'react';
import LevyRozman from './streamers/LevyRozman';


const LRozman = () => (
    <div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <iframe src="https://player.twitch.tv/?channel=gothamchess&parent=chessenovy.netlify.app" frameBorder="0"
                            allowFullScreen="true" scrolling="no" height="378" width="620" title="Levy Plays Chess"></iframe>
                </div>
                <div className="col">
                    <LevyRozman/>
                </div>
            </div>
        </div>
    </div>
);

export default LRozman;
