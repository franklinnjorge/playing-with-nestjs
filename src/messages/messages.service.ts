import { Get, Injectable, Param } from "@nestjs/common";
import { Message } from "./IMessage";
import { MessageDto } from "./MessageDto";

@Injectable()
export class MessagesService {
  private messages: Message[] = [
    {
      id: 1,
      text: "First message",
    },
    {
      id: 2,
      text: "Second message",
    },
  ];

  findAll() {
    return this.messages;
  }

  async findById(id: number){
    const message = this.messages.find(message => message.id === id)
    if(!message){
      throw Error('Message not found!')
    }
    return message;
  }

  create(messageDto: MessageDto){
    const id = this.messages.length + 1;

    const message: Message = {
      id, 
      ...messageDto,
    }
    
    this.messages.push(message)
    return message
  }

  update(id, message: Message){
    const index = this.messages.findIndex(message => message.id === id)

    this.messages[index] = message;

    return message; 
  }

  delete(id: number){
    const index = this.messages.findIndex(message => message.id === id)

    delete this.messages[index] 
    return true;
  }
}
