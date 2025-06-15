import { inject, Injectable } from '@angular/core';

export interface Channel {
  name: string;
  description: string;
  createdAt: Date;
}

export interface Post {
  content: string;
  channelName: string;
  createdAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  private channels: Channel[] = [];
  private posts: Post[] = [];

  createChannel(name: string, description: string): Channel {
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
    return this.channels;
  }

  // Новый метод: создать пост
  createPost(content: string, channelName: string): Post {
    const post: Post = {
      content,
      channelName,
      createdAt: new Date(),
    };
    this.posts.push(post);
    console.log('Пост опубликован:', post);
    return post;
  }

  // Новый метод: получить посты по каналу
  getPosts(channelName: string): Post[] {
    return this.posts.filter(post => post.channelName === channelName);
  }
}
