import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { GetUsersParamsDto } from "./dtos/get-users-params.dto";
import { AuthService } from "src/auth/auth.service";

@Injectable()
export class UsersService{

    constructor(
        @Inject(forwardRef(()=>AuthService))
        private readonly authService: AuthService
    ){}

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

    public findOneById(
        id: number
    ){
        return {
            id: 1234,
            firstName: 'John 1234',
            email: 'john1234@gmail.com'
        }
    }
}