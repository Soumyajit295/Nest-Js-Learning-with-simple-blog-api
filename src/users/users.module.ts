import { forwardRef, Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { AuthModule } from "src/auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user.entity";

@Module({
    imports: [
        forwardRef(() => AuthModule),
        TypeOrmModule.forFeature([User])
    ],
    controllers: [UsersController],
    providers: [UsersService], // Providers means providing Usersservice to the local components of users module
    exports: [UsersService] // Now UsersService can be user outside of the module
})
export class UsersModule{}