import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";

export class GetUsersParamsDto {
    @ApiProperty({
        description: 'Get user by specific id',
        example: 1234
    })
    @IsOptional()
    @IsInt()
    @Type(() => Number)
    id?: number
}