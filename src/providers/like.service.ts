import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {Posts} from "../models/posts";

@Injectable()
export class LikeService {
  constructor(private http: Http){

  }

  getLikes(): Promise<Posts[]>{
    return this.http.get('../assets/files/like.json')
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError)
  }
  private handleError(error: any): Promise<any> {
    console.error("An error occurred", error); // for demo purposes only
    return Promise.reject(error.message || error)
  }
}
