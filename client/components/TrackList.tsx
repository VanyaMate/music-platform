import React from 'react';
import {ITrack} from "@/types/track";
import {Box, Grid} from "@mui/material";
import TrackItem from "@/components/TrackItem";

export interface ITrackList {
    tracks: ITrack[]
}

const TrackList: React.FC<ITrackList> = ({ tracks }) => {
    return (
        <Grid container direction={'column'}>
            <Box p={2}>
                {
                    tracks.map((track) => <TrackItem key={track._id} {...track}/>)
                }
            </Box>
        </Grid>
    );
};

export default TrackList;