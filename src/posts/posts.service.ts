import { Injectable } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import { CreatePostDto } from "./dtos/create-post.dto";
import { Repository } from "typeorm";
import { Post } from "./post.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { MetaOption } from "src/meta-options/meta-option.entity";

@Injectable()
export class PostsService{
    constructor(
        private readonly usersService: UsersService,

        @InjectRepository(Post)
        private readonly postRepository: Repository<Post>,

        @InjectRepository(MetaOption)
        public readonly metaOptionsRepository: Repository<MetaOption>
    ){}

    public async createPost(createPostDto: CreatePostDto){
        let post = this.postRepository.create({
            ...createPostDto,
            metaOptions: createPostDto.metaOptions ?? undefined,
            tags: createPostDto.tags?.join(','),
        });
        return await this.postRepository.save(post)
    }

    public async findAll(){
        return await this.postRepository.find({
            relations: {
                metaOptions: true
            }
        })
    }

    public async delete(id: number){
        await this.postRepository.delete(id)

        return {
            deleted: true,
            id
        }
    }
}