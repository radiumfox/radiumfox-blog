import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
    @Prop()
    date: string;

    @Prop()
    title: string;

    @Prop()
    content: string;

    @Prop([String]) // complex types
    tags: string[];

    @Prop([String]) // complex types
    images: string[];

}

export const PostSchema = SchemaFactory.createForClass(Post);
