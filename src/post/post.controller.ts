import { Controller ,Post,Get} from '@nestjs/common';

@Controller('post')
export class PostController {

    @Get()
    post(){
        return 'get'
    }

    @Post()
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
