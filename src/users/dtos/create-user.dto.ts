import { IsEmail, IsNotEmpty, IsOptional, IsString, Max, MaxLength, MinLength } from "class-validator"
import { Unique } from "typeorm"

export class CreateuserDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(2,{message: 'first name should be more than 2 character'})
    @MaxLength(90)
    firstName: string

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    @MaxLength(90)
    lastName?: string

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @MaxLength(90)
    email: string

    @IsString()
    @IsNotEmpty()
    @MaxLength(90)
    password: string
}