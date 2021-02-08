import React from 'react';

//Import all Profile Pictures
import chessNetworkPic from '../img/ChessNetwork.png';
import christofSieleckiPic from '../img/Christof-Sielecki.png';
import ericRosenPic from '../img/Eric-Rosen.png';
import johnBartholomewPic from '../img/John-Bartholomew.png';
import botezPic from '../img/Alexandra-Botez.png';
import agadmatorPic from '../img/Agadmator.png';
import nakamuraPic from '../img/Hikaru-Nakamura.png';
import lrozmanPic from '../img/Levy-Rozman.png';

console.log("Hi Programmers! My Name is Nathan Orlowski and this is my ReactJS passion project.  If you are interested " +
    "in seeing my CV, please go to NathanOrlowski.com")

function Home() {
    return (
            <div className="container-fluid">
            <div className="container">
                <div className="greetings">
                    <h1>Meet the Best Live Chess Streamers</h1>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <a href="/ARadic">
                            <img src={agadmatorPic} alt="logo" className="img-fluid"/>
                        </a>
                        <div className="d-flex justify-content-center vegas">
                            <a href="/ARadic" className="streamerName">Agadmator</a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <a href="/ABotez">
                            <img src={botezPic} alt="logo" className="img-fluid"/>
                        </a>
                        <div className="d-flex justify-content-center vegas">
                            <a href="/ABotez" className="streamerName">Alexandra Botez</a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <a href="/CNetwork">
                            <img src={chessNetworkPic} alt="logo" className="img-fluid"/>
                        </a>
                        <div className="d-flex justify-content-center vegas">
                            <a href="/CNetwork" className="streamerName">ChessNetwork</a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <a href="/CSielecki">
                            <img src={christofSieleckiPic} alt="logo" className="img-fluid"/>
                        </a>
                        <div className="d-flex justify-content-center vegas">
                            <a href="/CSielecki" className="streamerName">Christof Sielecki</a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <a href="/ERosen">
                            <img src={ericRosenPic} alt="logo" className="img-fluid"/>
                        </a>
                        <div className="d-flex justify-content-center vegas">
                            <a href="/ERosen" className="streamerName">Eric Rosen</a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <a href="/HNakamura">
                            <img src={nakamuraPic} alt="logo" className="img-fluid"/>
                        </a>
                        <div className="d-flex justify-content-center vegas">
                            <a href="/HNakamura" className="streamerName">Hikaru Nakamura</a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <a href="/JBartholomew">
                            <img src={johnBartholomewPic} alt="logo" className="img-fluid"/>
                        </a>
                        <div className="d-flex justify-content-center vegas">
                            <a href="/JBartholomew" className="streamerName">John Bartholomew</a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <a href="/LRozman">
                            <img src={lrozmanPic} alt="logo" className="img-fluid"/>
                        </a>
                        <div className="d-flex justify-content-center vegas">
                            <a href="/LRozman" className="streamerName">Levy Rozman</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;