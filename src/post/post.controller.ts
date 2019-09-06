import { Controller ,Post,Get, Body} from '@nestjs/common';
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
    detail(){
        return{
            id:1,
            title:'hhhh'
        }
    }
}
