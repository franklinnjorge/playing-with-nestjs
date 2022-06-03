import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Message } from "./IMessage";
import { MessagesService } from "./messages.service";

@Controller("messages")
export class MessagesController {
  constructor(private messageService: MessagesService) {}

  @Get()
  findAll() {
    return this.messageService.findAll();
  }

  @Get(':id')
  findById(@Param() params){
    return this.messageService.findById(+params.id);
  }

  @Post()
  create(@Body() message: Message){
    return this.messageService.create(message)
  }

  @Put(':id')
  update(@Param() params, @Body() message: Message){
    return this.messageService.update(+params.id, message)
  }

  @Delete(':id')
  delete(@Param() params){
    return this.messageService.delete(+params.id)
  }
}
