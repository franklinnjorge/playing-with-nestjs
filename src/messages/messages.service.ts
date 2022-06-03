import { Get, Injectable, Param } from "@nestjs/common";
import { Message } from "./IMessage";

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

  findById(id: number){
    return this.messages.find(message => message.id === id)
  }

  create(message: Message){
    return this.messages.push(message)
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
