import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from "@nestjs/common";
import { CreateuserDto } from "./dtos/create-user.dto";
import { GetUsersParamsDto } from "./dtos/get-users-params.dto";
import { PatchUserDto } from "./dtos/patch-user.dto";
import { UsersService } from "./users.service";

// https://localhost:3000/users

@Controller('users')
export class UsersController {

    constructor(
        // Injecting users service
        private readonly usersService: UsersService  
    ){}

    @Get()
    public getUsers(
        @Query('limit',new DefaultValuePipe('10'),ParseIntPipe) limit: number,
        @Query('offset',new DefaultValuePipe('1'),ParseIntPipe) offset: number
    ){
        return this.usersService.findAll(limit,offset)
    }

    @Get('/:id')
    public getUserById(@Param() getUsersParamsDto: GetUsersParamsDto ){
        return this.usersService.findOneById(getUsersParamsDto?.id!)
    }

    @Post()
    public createUser(@Body() reqBody: CreateuserDto){
        return {
            reqBody,
            message: `User created successfully`
        }
    }

    @Patch()
    public patchUser(@Body() patchUserDto: PatchUserDto){
        return {
            patchUserDto
        }
    }

}