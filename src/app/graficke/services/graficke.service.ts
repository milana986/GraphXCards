import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

const url: string = "http://localhost:3000/api/cards";
import { Card } from '../model/card';
import { CardList} from '../model/card-list';
import { Comment } from '../model/comment';
import { CommentList } from '../model/comment-list';


@Injectable()
export class GrafickeService {

  constructor(private http: HttpClient) { }


  getAll(params?: any): Observable<CardList>{

  let querryParams = {}
  if(params){
    querryParams = { params:new HttpParams()
    .set("pageSize", params.pageSize && params.pageSize.toString() || "")
    .set("page", params.page && params.page.toString() || "")
    }
  }
    return this.http.get(url, querryParams).map((response)=>{
      console.log(new CardList(response));
      return new CardList(response);
    });
  }

  saveCard(card:Card):Observable<Card>{
    return this.http.put(url + "/" + card._id, card).map((response)=>{
      return new Card(response);
    })
  }

  getComments(id:number):Observable<CommentList>{
     return this.http.get(url + '/' + id + '/comments').map((response)=>{
      return new CommentList(response);
    });
  }

  saveComment(comment:Comment):Observable<Comment>{
    return this.http.post(url + "/" + comment._id + '/comments', comment).map((response)=>{
      return new Comment(response);
    })
  }

}
