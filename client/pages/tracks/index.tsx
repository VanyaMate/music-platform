import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Button, Card, Grid} from "@mui/material";
import css from '@/styles/tracksPage.module.scss';
import {useRouter} from "next/router";
import {ITrack} from "@/types/track";
import TrackList from "@/components/TrackList";

const Index = () => {
    const router = useRouter();
    const tracks: ITrack[] = [
        { _id: '1', name: 'Track 1', listens: 1, text: 'text 1', artist: 'IVAN', audio: '', comments: [], picture: 'http://localhost:5000/image/5efa54a8-49ea-423d-a93c-27d6dfe20994.PNG', },
        { _id: '2', name: 'Track 2', listens: 5, text: 'text 2', artist: 'IVAN', audio: '', comments: [], picture: 'http://localhost:5000/image/5efa54a8-49ea-423d-a93c-27d6dfe20994.PNG', },
        { _id: '3', name: 'Track 3', listens: 11, text: 'text 3', artist: 'IVAN', audio: '', comments: [], picture: 'http://localhost:5000/image/5efa54a8-49ea-423d-a93c-27d6dfe20994.PNG', },
        { _id: '4', name: 'Track 4', listens: 0, text: 'text 4', artist: 'IVAN', audio: '', comments: [], picture: 'http://localhost:5000/image/5efa54a8-49ea-423d-a93c-27d6dfe20994.PNG', },
    ]

    return (
        <MainLayout>
            <Grid container justifyContent={'center'}>
                <Card className={css.container}>
                    <Grid container justifyContent={'space-between'}>
                        <h1>Список треков</h1>
                        <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
                    </Grid>
                    <TrackList tracks={tracks}/>
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Index;