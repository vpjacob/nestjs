import { Controller ,Post,Get, Body, Put, Param, Delete} from '@nestjs/common';
import { ApiUseTags, ApiModelProperty, ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';

export class Cat {
    @ApiModelProperty()
    name: string;
  
    @ApiModelProperty()
    age: number;
  }
  
@Controller('post')
@ApiUseTags('document')
export class PostController {

    @Get()
    @ApiOperation({title:'title',description:'description'})
    index(){
        return [
            {index:1,title:2},
            {index:1,title:2},
            {index:1,title:2},
            {index:1,title:2},
        ]
    }

    @Post()
    @ApiOperation({title:'post请求',description:'description'})
    create(@Body() body:Cat){
        return body;
    }

    @Get(':id')
    @ApiOperation({title:'帖子详情'})
    detail(@Param('id') id : string){
        return{
            id:id,
            title:'hhhh'
        }
    }

    @Put(':id')
    @ApiOperation({title:'编辑帖子'})
    put(@Param('id') id :string,@Body() body:Cat){
        return {
            id:id,
            success:true
        }
    }

    @Delete(':id')
    @ApiOperation({title:'删除帖子'})
    remove(@Param('id') id:string){
        return{
            success:true
        }
    }


}
