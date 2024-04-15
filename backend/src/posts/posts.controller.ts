import {Body, Controller, Delete, Get, Param, Patch, Post, Put} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post as $Post } from './schemas/post.schema';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Post()
    async create(@Body() createPostDto: CreatePostDto): Promise<$Post>  {
        return this.postsService.create(createPostDto);
    }

    @Get()
    async findAll(): Promise<$Post[]> {
        return this.postsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<$Post> {
        return this.postsService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto): Promise<$Post> {
        return this.postsService.updateOne(id, updatePostDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.postsService.delete(id);
    }
}
