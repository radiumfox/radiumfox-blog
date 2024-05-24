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

    @Prop([String])
    tags: string[];

    @Prop([String])
    images: string[];

    @Prop()
    mainImage: string;

    @Prop()
    isFeatured: boolean;
}

export const PostSchema = SchemaFactory.createForClass(Post);
