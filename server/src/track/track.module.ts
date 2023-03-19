import { Module } from '@nestjs/common';
import {TrackController} from "./track.controller";
import {TrackService} from "./track.service";
import {MongooseModule} from "@nestjs/mongoose";
import {Track, TrackSchema} from "./shemas/track.schema";
import {Comment, CommentSchema} from "./shemas/comment.schema";
import {FileModule} from "../file/file.module";
import {FileService} from "../file/file.service";

@Module({
    controllers: [TrackController],
    providers: [TrackService, FileService],
    imports: [
        MongooseModule.forFeature([{ name: Track.name, schema: TrackSchema }]),
        MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
    ]
})
export class TrackModule {}
