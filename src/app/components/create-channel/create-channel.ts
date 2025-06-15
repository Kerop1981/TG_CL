import { Component } from '@angular/core';
import { ChannelService } from '../../channelservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-channel',
  imports: [CommonModule,FormsModule],
  templateUrl: './create-channel.html',
  styleUrl: './create-channel.css'
})
export class CreateChannel {
 name = '';
 description = '';
 message = '';

 constructor(private channelService:ChannelService){}

 onSumbit(){
  if(this.name.trim() && this.description.trim()){
    this.channelService.createChannel(this.name,this.description);
    this.message = 'канал создан';
    this.name = '';
    this.description = '';
  } else {
    this.message = 'Заполните все поля'
  }
 }
}
