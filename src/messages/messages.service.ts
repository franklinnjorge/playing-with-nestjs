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

  async update(id: number, messageDto: MessageDto){
    const index = this.messages.findIndex(message => message.id === id)
     
    if(index < 0){
      throw Error('Message not found!')
    }

    const message: Message = {
      id, 
      ...messageDto,
    };

    this.messages[index] = message;

    return message; 
  }

  async delete(id: number){
    const index = this.messages.findIndex(message => message?.id === id)
      
    if(index < 0){
      throw Error('Message not found!')
    }

    delete this.messages[index] 
  }
}
