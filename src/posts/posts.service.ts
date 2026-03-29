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
        // Find author by authorId
        
        let post = this.postRepository.create({
            ...createPostDto,
            author: {id: createPostDto?.authorId},
            metaOptions: createPostDto.metaOptions ?? undefined,
            tags: createPostDto.tags?.join(','),
        });

        return await this.postRepository.save(post)
    }

    public async findAll(){
        return await this.postRepository.find({
            relations: {
                metaOptions: true,
                author: true
            },
            select: {
                id: true,
                title: true,
                slug: true,
                content: true,
                tags: true,

                author: {
                    id: true,
                    email: true,
                    firstName: true
                },

                metaOptions: {
                    id: true,
                    metaValue: true
                }
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