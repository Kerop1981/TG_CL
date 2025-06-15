import { inject, Injectable } from '@angular/core';

export interface Channel{
  name: string;
  description: string;
  createdAt: Date;
}


@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  private channels:Channel[] = [];

  createChannel(name: string, description:string): Channel {
    const channel = {
      name,
      description,
      createdAt: new Date(),
    };
    this.channels.push(channel);
    console.log('Канал создан:', channel);
    return channel;
  }

  getChannels(): Channel[] {
    return this.channels
  }
}
