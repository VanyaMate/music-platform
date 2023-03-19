import {ObjectId} from "mongoose";

export class CreateCommentDto {
    readonly author: string;
    readonly text: string;
    readonly trackId: ObjectId
}