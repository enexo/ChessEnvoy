import React, {
    useEffect, useState, Fragment
} from 'react';
import api from '../../api';
import '../../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from "@fortawesome/free-solid-svg-icons";

function EricRosen() {
    const [profileImage, setProfileImage] = useState('unknown');
    // eslint-disable-next-line
    const [displayName, setDisplayName] = useState('unknown');
    const [userDesc, setUserDesc] = useState('unknown');
    const [isLive, setIsLive] = useState('offline');

    useEffect(() => {
        const fetchData = async () => {

            // Fetch Biographical Information
            const user = await api.get('https://api.twitch.tv/helix/users?login=imrosen');
            let dataArray = user.data.data[0];

            let displayName = dataArray.display_name;
            setDisplayName(displayName);
            let profileImage = dataArray.offline_image_url;
            setProfileImage(profileImage);
            let userDesc = dataArray.description;
            setUserDesc(userDesc);

            // Fetch whether or not user is Live on Twitch
            const channel = await api.get('https://api.twitch.tv/helix/search/channels?query=imrosen');
            let channelResult = channel.data.data[0].is_live;
            const isLive = "Eric Rosen is Live on Twitch!";
            // If Live, then post live; needs improvement because it prints "Unknown" if statement is False
            if (channelResult) {
                setIsLive(isLive);
                console.log(isLive);
            }
        };
        fetchData();
    }, []);
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src={profileImage} alt="" className="img-fluid"/><br/>
                        <h2 className="lifetimeTitle">International Master</h2>
                        <h1>Eric Rosen</h1>
                        <strong>American</strong>
                        <div className="row">
                            <div className="col">
                                <strong><a href="https://en.wikipedia.org/wiki/FIDE">FIDE Rating</a>: 2353</strong>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col">
                                <strong className="beBold">Follow Him On:</strong>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col socialLinks">
                                <FontAwesomeIcon icon={["fab", "twitch"]} className="social twitch"/>
                                <a href="https://www.twitch.tv/imrosen" className="socialLinks">Twitch</a>
                            </div>
                            <div className="col socialLinks">
                                <FontAwesomeIcon icon={["fab", "twitter"]} className="social twitter"/>
                                <a href="https://twitter.com/IM_Rosen" className="socialLinks">Twitter</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <FontAwesomeIcon icon={["fab", "youtube"]} className="social youtube"/>
                                <a href="https://www.youtube.com/user/RosenChess" className="socialLinks">Youtube</a>
                            </div>
                            <div className="col">
                                <FontAwesomeIcon icon={faPen} className="social pen"/>
                                <a href="https://imrosen.com/" className="socialLinks">Personal Site</a>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col">
                                <strong className="beBold">Twitch Bio</strong>
                                <p className="userDesc">{userDesc}</p>
                                <p  className="userDesc">Twitch Streaming Status: {isLive}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default EricRosen;
