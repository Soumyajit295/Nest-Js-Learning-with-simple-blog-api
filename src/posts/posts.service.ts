import { Injectable } from "@nestjs/common";
import { UsersService } from "src/users/users.service";

@Injectable()
export class PostsService{
    constructor(
        private readonly usersService: UsersService
    ){}

    public findAll(userId: number){
        const user = this.usersService.findOneById(Number(userId))
        return [
            {
                user,
                title: 'Test file 1',
                content: 'Test content'
            },
            {
                user,
                title: 'Test file 2',
                content: 'Test content'
            },
        ]
    }
}