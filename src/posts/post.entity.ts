import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PostTypeEnum } from "./enums/post-type.enum";
import { PostStatus } from "./enums/post-status.enum";
import { CreatePostMetaOptionDto } from "../meta-options/dtos/create-post-metaOption.dto";
import { MetaOption } from "src/meta-options/meta-option.entity";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: 'varchar',
        length: 512,
        nullable: false
    })
    title: string;

    @Column({
        type: 'enum',
        enum: PostTypeEnum,
        nullable: false,
        default: PostTypeEnum.POST
    })
    postType: PostTypeEnum;

    @Column({
        type: 'varchar',
        length: 256,
        nullable: false,
        unique: true
    })
    slug: string

    @Column({
        type: 'enum',
        enum: PostStatus,
        nullable: false,
        default: PostStatus.DRAFT
    })
    status: PostStatus;

    @Column({
        type: 'text',
        nullable: false 
    })
    content: string;

    @Column({
        type: 'varchar',
        nullable: true
    })
    schema: string

    @Column({
        type: 'varchar',
        length: 1024,
        nullable: true
    })
    featuredImageUrl: string;

    @Column({
        type: 'timestamp',
        nullable: true
    })
    publishOn: Date;

    @OneToOne(() => MetaOption,(metaOption)=>metaOption.post,{
        eager: true,
        cascade: true
    })
    metaOptions?: MetaOption

    @Column()
    tags: string;
}