import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Post as $Post } from './schemas/post.schema';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Post()
    async create(@Body() createPostDto: CreatePostDto) {
        await this.postsService.create(createPostDto);
    }

    @Get()
    async findAll(): Promise<$Post[]> {
        return this.postsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<$Post> {
        return this.postsService.findOne(id);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.postsService.delete(id);
    }
}