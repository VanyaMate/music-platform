import {Module} from "@nestjs/common";
import { TrackModule } from './track/track.module';
import {MongooseModule} from "@nestjs/mongoose";
import {config} from 'dotenv';
import {FileModule} from "./file/file.module";
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from 'path';
config();

@Module({
    imports: [
        TrackModule,
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static'),
        }),
        MongooseModule.forRoot(`mongodb+srv://${process.env.MONGO_DB_LOGIN}:${process.env.MONGO_DB_PASSWORD}@cluster0.yuutfwv.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`),
        FileModule
    ]
})
export class AppModule {}