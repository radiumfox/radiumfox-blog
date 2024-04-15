import { Module,  } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from "./posts/posts.module";
import * as process from "process";
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot({
            cache: true,
        }),
        MongooseModule.forRoot(process.env.DATABASE_URI),
        PostsModule
    ],
})

export class AppModule {}