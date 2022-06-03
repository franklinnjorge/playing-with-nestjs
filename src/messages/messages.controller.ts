import { Controller, Get } from '@nestjs/common';

@Controller('messages')
export class MessagesController {

  @Get()
  findAll(){
    return [
      {
        id: 1,
        text: 'First message'
      },
      {
        id: 2, 
        text: 'Second message'
      }
    ]
  }
}
