import { Component,EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {


  @Input()
  cLike: number = undefined;
  
  @Input()
  cDislike: number = undefined;

  likeCount : number = 1;
  dislikeCount : number = 1;


  @Output()
  likeButton : EventEmitter<number> = new EventEmitter<number>();

  @Output()
  dislikeButton : EventEmitter<number> = new EventEmitter<number>();

  Like(){
    if(this.cLike == 0){
      this.likeCount = 1;
      this.cLike = undefined;
    }
    this.likeButton.emit(this.likeCount++);
  }

  Dislike(){
    if(this.cDislike == 0){
      this.dislikeCount = 1;
      this.cDislike = undefined;
    }
    this.dislikeButton.emit(this.dislikeCount++);
  }

}
