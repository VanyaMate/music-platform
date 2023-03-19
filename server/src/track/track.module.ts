import { Module } from '@nestjs/common';
import {TrackController} from "./track.controller";
import {TrackService} from "./track.service";
import {MongooseModule} from "@nestjs/mongoose";
import {Track, TrackSchema} from "./shemas/track.schema";
import {Comment, CommentSchema} from "./shemas/comment.schema";

@Module({
    controllers: [TrackController],
    providers: [TrackService],
    imports: [
        MongooseModule.forFeature([{ name: Track.name, schema: TrackSchema }]),
        MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
    ]
})
export class TrackModule {}
