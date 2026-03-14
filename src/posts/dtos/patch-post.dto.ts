import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsInt, IsNotEmpty } from "class-validator";
import { CreatePostDto } from "./create-post.dto";

export class PatchPostDto extends PartialType(CreatePostDto){
    @ApiProperty({
        description: 'ID of post you want to update'
    })
    @IsInt()
    @IsNotEmpty()
    id: number
}