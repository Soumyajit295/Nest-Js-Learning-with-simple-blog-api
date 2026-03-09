import { PartialType } from '@nestjs/mapped-types'
import { CreateuserDto } from './create-user.dto';


export class PatchUserDto extends PartialType(CreateuserDto) {} 