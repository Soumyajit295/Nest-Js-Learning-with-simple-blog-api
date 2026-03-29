import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { GetUsersParamsDto } from "./dtos/get-users-params.dto";
import { AuthService } from "src/auth/auth.service";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { CreateuserDto } from "./dtos/create-user.dto";

@Injectable()
export class UsersService{

    constructor(
        @Inject(forwardRef(()=>AuthService))
        private readonly authService: AuthService,

        @InjectRepository(User)
        private readonly usersRepository: Repository<User>
    ){}

    public async createUser(createUserDto: CreateuserDto) {
        // Check user exist with same email
        const existingUser = await this.usersRepository.findOne({
            where: {email: createUserDto.email}
        })

        // Handle Exception

        // Create a new user
        let newUser = this.usersRepository.create(createUserDto)
        newUser = await this.usersRepository.save(newUser)

        return newUser
    }

    public findAll(
        limit: number,
        offset: number
    ){
        const isAuth = this.authService.isAuthenticated()
        
        return [
            {
                firstName: "John 1",
                email: "john1@gmail.com"
            },
            {
                firstName: "John 2",
                email: "john2@gmail.com"
            },
            {
                firstName: "John 3",
                email: "john3@gmail.com"
            },
        ]
    }

    public async findOneById(
        id: number
    ){
        return await this.usersRepository.findOneBy({id})
    }


}