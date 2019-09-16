import { Controller, Post, Get, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiUseTags, ApiModelProperty, ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { PostModel } from './post.model';
import { mongoose } from '@hasezoey/typegoose';

export class Cat {
    @ApiModelProperty({ description: '帖子标题', example: '帖子标题1' })
    title: string;

    @ApiModelProperty({ description: '帖子内容', example: '帖子内容1' })
    content: string;
}

@Controller('post')
@ApiUseTags('document')
export class PostController {

    @Get()
    @ApiOperation({ title: 'title', description: 'description' })
    async index() {
        return await PostModel.find()
    }

    @Post()
    @ApiOperation({ title: 'post请求', description: 'description' })
    async create(@Body() createPostDto: Cat) {
        await PostModel.create(createPostDto);
        return {
            success: true
        };
    }

    @Get(':id')
    @ApiOperation({ title: '帖子详情' })
    async detail(@Param('id') id: string) {
        return await PostModel.findById(id)
    }

    @Put(':id')
    @ApiOperation({ title: '编辑帖子' })
    async put(@Param('id') id: string, @Body() updatePostDto: Cat) {
        await PostModel.findByIdAndUpdate(id, updatePostDto)
        return {
            success: true
        }

    }

    @Delete(':id')
    @ApiOperation({ title: '删除帖子' })
    async remove(@Param('id') id: string) {
        await PostModel.findByIdAndDelete(id)
        return {
            success: true
        }
    }


}
