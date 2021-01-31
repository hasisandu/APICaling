import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import CommentDTO from '../dto/CommentDTO';
import {CommentService} from '../service/comment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(/*private http: HttpClient*/ private commentService: CommentService) {

  }

  dataArray: CommentDTO[] = [];

  loadAllData() {
    // ----------------
    this.commentService.getAllComments().subscribe(resp => {
      this.dataArray = resp;
    }, error => {
      console.log(error);
    });
    // ----------------
    // GET---> GET DATA FRM A SERVER (headers)
    // POST ---> SAVE DATA (SEND DATA TO THE SERVER) (body)
    // PUT ---> UPDATE DATA (body)
    // DELETE  ---> DELETE DATA (headers)
    /*this.http.get('https://jsonplaceholder.typicode.com/comments').subscribe(resp => {
      this.dataArray=resp;
      console.log(this.dataArray);
    }, error => {
      console.log(error);
    });*/

  }
}
