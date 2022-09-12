import { Component, OnInit } from '@angular/core';
import { BoardService } from 'src/app/services/board.service';
import { GoogleauthService } from 'src/app/services/googleauth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public boardService: BoardService,
    public authSvc: GoogleauthService
  ) { }
  onGoogleLogin() {
    this.authSvc.loginGoogle();
  }
  ngOnInit(): void {
  }

  addColumn(event: string) {
    if (event) {
      this.boardService.addColumn(event)
    }
  }

}
