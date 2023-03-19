import {Module} from "@nestjs/common";
import { TrackModule } from './track/track.module';
import {MongooseModule} from "@nestjs/mongoose";
import {config} from 'dotenv';
config();

@Module({
    imports: [
        TrackModule,
        MongooseModule.forRoot(`mongodb+srv://${process.env.MONGO_DB_LOGIN}:${process.env.MONGO_DB_PASSWORD}@cluster0.yuutfwv.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`)
    ]
})
export class AppModule {}