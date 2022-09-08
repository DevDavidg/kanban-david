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
  async onGoogleLogin() {
    try {
      this.authSvc.loginGoogle();
    } catch (error) { console.log(error) }
  }
  ngOnInit(): void {
  }

  addColumn(event: string) {
    if (event) {
      this.boardService.addColumn(event)
    }
  }

}
