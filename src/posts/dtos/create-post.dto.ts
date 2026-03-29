import { 
  IsArray, IsEnum, IsInt, IsISO8601, IsJSON, IsNotEmpty, 
  IsOptional, IsString, MaxLength, MinLength, ValidateNested 
} from "class-validator";

import { PostTypeEnum } from "../enums/post-type.enum";
import { PostStatus } from "../enums/post-status.enum";
import { CreatePostMetaOptionDto } from "../../meta-options/dtos/create-post-metaOption.dto";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class CreatePostDto {

  @IsString()
  @IsNotEmpty()
  @MinLength(3, { message: 'Title should be greater than 2 characters long' })
  @ApiProperty()
  @MaxLength(512)
  title: string;

  @IsEnum(PostTypeEnum)
  @IsNotEmpty()
  @ApiProperty()
  postType: PostTypeEnum;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @MaxLength(256)
  slug: string;

  @IsEnum(PostStatus)
  @IsNotEmpty()
  @ApiProperty()
  status: PostStatus;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  content: string;

  @IsOptional()
  @IsJSON()
  schema?: string;

  @IsString()
  @ApiProperty()
  @MaxLength(1024)
  @IsOptional()
  featuredImageUrl?: string;

  @IsISO8601()
  @IsOptional()
  @ApiProperty()
  @IsOptional()
  publishOn?: Date;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @MinLength(3, { each: true })
  @ApiProperty()
  tags: string[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreatePostMetaOptionDto)
  @ApiProperty()
  metaOptions?: CreatePostMetaOptionDto | null;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty({
    type: 'integer',
    required: true,
    example: 1
  })
  authorId: number;
}