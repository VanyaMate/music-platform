import React from 'react';
import {ITrack} from "@/types/track";

const TrackItem: React.FC<ITrack> = (track) => {
    return (
        <div>
            <img src={ track.picture }/>
            <h1>{ track._id }, { track.name }</h1>
        </div>
    );
};

export default TrackItem;