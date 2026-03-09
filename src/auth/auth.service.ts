import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        @Inject(forwardRef(()=> UsersService))
        private readonly usersService: UsersService
    ){}
    public login(email: string,pass: string){
        const user = this.usersService.findOneById(1234)
        return
    }

    public isAuthenticated(){
        return true
    }
}
