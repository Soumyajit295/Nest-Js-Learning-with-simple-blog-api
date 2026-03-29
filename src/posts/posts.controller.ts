import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { PostsService } from "./posts.service";
import { CreatePostDto } from "./dtos/create-post.dto";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { PatchPostDto } from "./dtos/patch-post.dto";

@Controller('posts')
export class PostsController{
    constructor(
        private readonly postsService: PostsService
    ){}

    @Get()
    public findAllPosts(){
        return this.postsService.findAll()
    }

    @ApiResponse({
        status: 201,
        description: 'Post Created successfully'
    })
    @ApiOperation({
        summary: "Create a new post"
    })
    @Post()
    public createPost(@Body() createPostDto: CreatePostDto){
        return this.postsService.createPost(createPostDto)
    }

    @Patch()
    public updatePost(@Body() patchPostDto: PatchPostDto){
        console.log(patchPostDto)
    }

    @Delete(':id')
    public deletePost(@Param('id',ParseIntPipe) id: number){
        return this.postsService.delete(id)
    }
}
