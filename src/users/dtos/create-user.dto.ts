import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator"

export class CreateuserDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(2,{message: 'first name should be more than 2 character'})
    firstName: string

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    lastName?: string

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsString()
    @IsNotEmpty()
    password: string
}