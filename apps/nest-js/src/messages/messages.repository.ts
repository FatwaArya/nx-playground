import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('./apps/nest-js/messages.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages[id];
  }
  async findAll() {
    const contents = await readFile('./apps/nest-js/messages.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages;
  }
  async create(message: string) {
    const contents = await readFile('./apps/nest-js/messages.json', 'utf8');
    const messages = JSON.parse(contents);
    const id = Math.floor(Math.random() * 999);
    messages[id] = { id, message };
    await writeFile('./apps/nest-js/messages.json', JSON.stringify(messages));
  }
}
