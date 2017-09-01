import { Component } from '@angular/core';
import {LikeService} from "../../providers/like.service";
import {Posts} from "../../models/posts";
import {Output} from "../../models/output";

@Component({
  selector: 'ViewPage',
  templateUrl: 'view.html'
})
export class ViewPage {

  likes: Posts[] = [];
  output: Output[] = [];
  constructor(private likeService: LikeService) {

  }
  ngOnInit(){
    this.getLikes();
  }
  getLikes(){
    this.likeService.getLikes().then(res =>{
      res.forEach(likes =>{
        this.likes.push(likes);
      })
    }).then(()=>
      this.likes.forEach(like =>{
        let text;
        if(like.likes.length > 3){
            text = like.likes[0] + ', ' + like.likes[1] + ' and ' + ((like.likes.length)-2) + ' others like this' ;
        }else if(like.likes.length > 2){
          text = like.likes[0] + ', ' + like.likes[1] + ' and ' + like.likes[2] + ' likes this';
        }else if(like.likes.length > 1){
          text = like.likes[0] + ' and ' + like.likes[1] + ' like this';
        }else if(like.likes.length > 0){
          text = like.likes[0] + ' like this';
        }else{
          text = 'No one likes this';
        }
        let output = new Output(like.id, text);
        this.output.push(output);
      })
    );
  }

}
