import { Injectable } from '@nestjs/common';
import { CreatePostMetaOptionDto } from './dtos/create-post-metaOption.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from './meta-option.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MetaOptionsService {
    constructor(
        @InjectRepository(MetaOption)
        private readonly metaOptionRepository: Repository<MetaOption>
    ){}

    public async create(createPostMetaOptionDto: CreatePostMetaOptionDto){
        let metaOption = this.metaOptionRepository.create(createPostMetaOptionDto)
        return await this.metaOptionRepository.save(metaOption)
    }   
}
