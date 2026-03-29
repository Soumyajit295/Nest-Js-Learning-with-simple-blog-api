import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from "@nestjs/common";
import { CreateuserDto } from "./dtos/create-user.dto";
import { GetUsersParamsDto } from "./dtos/get-users-params.dto";
import { PatchUserDto } from "./dtos/patch-user.dto";
import { UsersService } from "./users.service";
import { ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";

// https://localhost:3000/users

@Controller('users')
export class UsersController {

    constructor(
        // Injecting users service
    private readonly usersService: UsersService  
    ){}

    @Get()
    @ApiQuery({
        name: 'limit',
        type: 'number',
        required: false,
        description: 'The number of users you need'
    })
    @ApiQuery({
        name: 'page',
        type: 'number',
        required: false,
        description: 'The position of page you need'
    })
    @ApiResponse({
        status: 200,
        description: 'Users fetched successfully'
    })
    public getUsers(
        @Query('limit',new DefaultValuePipe('10'),ParseIntPipe) limit: number,
        @Query('page',new DefaultValuePipe('1'),ParseIntPipe) page: number
    ){
        return this.usersService.findAll(limit,page)
    }

    @Get('/:id')
    public getUserById(@Param() getUsersParamsDto: GetUsersParamsDto ){
        return this.usersService.findOneById(getUsersParamsDto?.id!)
    }

    @Post()
    public createUser(@Body() reqBody: CreateuserDto){
        return this.usersService.createUser(reqBody)
    }

    @Patch()
    public patchUser(@Body() patchUserDto: PatchUserDto){
        return {
            patchUserDto
        }
    }

}