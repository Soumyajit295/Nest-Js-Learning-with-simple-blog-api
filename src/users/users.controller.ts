import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, Query, ValidationPipe } from "@nestjs/common";
import { CreateuserDto } from "./dtos/create-user.dto";

// https://localhost:3000/users

@Controller('users')
export class UsersController {

    @Get()
    public getUsers(
        @Query('limit',new DefaultValuePipe('10'),ParseIntPipe) limit: number,
        @Query('offset',new DefaultValuePipe('1'),ParseIntPipe) offset: number
    ){
        return 'Response for get users request'
    }

    @Get('/:id')
    public getUserById(@Param('id',ParseIntPipe) id: number ){
        return `Response for get users request with id ${id}`
    }

    @Post()
    public createUser(@Body() reqBody: CreateuserDto){
        return {
            reqBody,
            message: `User created successfully`
        }
    }

}