import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { PostsService } from "./posts.service";

@Controller('posts')
export class PostsController{
    constructor(
        private readonly postsService: PostsService
    ){}

    @Get('/:userId')
    public findAllPosts(@Param('userId',ParseIntPipe) userId: number){
        return this.postsService.findAll(userId)
    }
}
