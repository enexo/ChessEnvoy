import React, {Fragment} from 'react';
import '../App.css';

function StreamerList() {

    return (
        <Fragment>
            <div className="streamerDir">
            <h2>Streamer Directory</h2>
            <ul className="streamerDir">
                <li><a href="/jbartholomew" className="streamerName">John Bartholomew</a></li>
                <li><a href="/cnetwork" className="streamerName">ChessNetwork</a></li>
                <li><a href="/csielecki" className="streamerName">Christof Sielecki</a></li>
                <li><a href="/erosen" className="streamerName">Eric Rosen</a></li>
                <li><a href="/abotez" className="streamerName">Alexandra Botez</a></li>
                <li><a href="/agadmator" className="streamerName">Agadmator</a></li>
                <li><a href="/HNakamura" className="streamerName">Hikaru Nakamura</a></li>
                <li><a href="/LRozman" className="streamerName">Levy Rozman</a></li>
                {/*<li><a href="/dnaroditsky" className="streamerName">Daniel Naroditsky</a></li>*/}
                {/*<li><a href="/bfinegold" className="streamerName">Ben Finegold</a></li>*/}
            </ul>
            </div>
        </Fragment>
    )
}

export default StreamerList;