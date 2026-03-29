import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreatePostMetaOptionDto } from './dtos/create-post-metaOption.dto';
import { MetaOptionsService } from './meta-options.service';

@Controller('meta-options')
export class MetaOptionsController {
    constructor(
        private readonly metaOptionsService: MetaOptionsService
    ){}
    @Post()
    public create(@Body() createMetaOptionDto: CreatePostMetaOptionDto){
        return this.metaOptionsService.create(createMetaOptionDto)
    }
}
