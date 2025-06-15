import { Component } from '@angular/core';
import { ChannelService } from '../../channelservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-publish',
  imports: [CommonModule,FormsModule],
  templateUrl: './post-publish.html',
  styleUrl: './post-publish.css'
})
export class PostPublish {

  selectedChannel = '';
  content = '';
  message = '';

  constructor(public channelService: ChannelService){}

  onSubmit() {
    if (this.selectedChannel && this.content.trim()) {
      this.channelService.createPost(this.content, this.selectedChannel);
      this.message = ' Пост отправлен!';
      this.content = '';
    } else {
      this.message = ' Заполни все поля.';
    }
  }
}
