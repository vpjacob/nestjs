import { Controller ,Post,Get} from '@nestjs/common';
import { ApiUseTags, ApiModelProperty, ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';

export class Cat {
    @ApiModelProperty()
    name: string;
  
    @ApiModelProperty()
    age: number;
  
    @ApiModelProperty()
    breed: string;
  }
  
@Controller('post')
@ApiUseTags('document')
export class PostController {

    @Get()
    @ApiOperation({title:'title',description:'desc'})
    index(){
        return [
            {index:1,title:2},
            {index:1,title:2},
            {index:1,title:2},
            {index:1,title:2},
        ]
    }

    @Post()
    @ApiCreatedResponse({ description: 'The record has been successfully created.', type: Cat })
    create(){
        return 'post';
    }

    @Get(':id')
    detail(){
        return{
            id:1,
            title:'hhhh'
        }
    }
}
