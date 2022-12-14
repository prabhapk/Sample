
import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { Users } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private service: UsersService) { }

    @Get(':id')
    get(@Param() params) {
        console.log(params.id,"controller")
        return this.service.getUser(params.id);
    }

     @Post()
     create(@Body() user: Users) {
         return this.service.createBook(user);
    }
    

    @Put()
    update(@Body() user: Users) {
        return this.service.updateUser(user);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteUser(params.id);
    }
}
