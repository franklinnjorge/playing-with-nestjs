import { Get, Injectable, Param } from "@nestjs/common";

@Injectable()
export class MessagesService {
  private messages = [
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
}
