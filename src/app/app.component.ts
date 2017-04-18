import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './modal.scss'],
  providers: [GameService]
})
export class AppComponent implements OnInit {
  selectedGame = {};
  applyClassOne = false;
  applyClassOut = false;
  title = 'Game Central';
  games = [];
  loading = false;

  constructor(private gameService: GameService) {}
  
  ngOnInit() {
    this.loadGames();
  }

  openModal(game) {
    console.log('game', game);
    this.selectedGame = game;
    this.applyClassOut = false;
    this.applyClassOne = true;
    document.body.className = 'modal-active';    
  }

  closeModal() {
    this.applyClassOut = true;
    document.body.className = '';
  }

  getImg(s, index) {
    if (!s) return;
    if (s.indexOf('/') === -1) {
      return s;
    }
    return false;
  }

  private loadGames() {
    this.loading = true;
    this.gameService.getGames().subscribe(data => {
      data = data.filter((e, i) => {
        return this.getImg(e.PreviewImg, i);
      });
      this.games = data;
      console.log(data);
      this.loading = false;
    });
  }
}
