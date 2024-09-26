import { Component, OnInit } from '@angular/core';
import { faGamepad, faCode, faPaintBrush, faLaptopCode,  faHeart, faList, faChessBoard} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  faGamepad = faGamepad;
  faCode = faCode;
  faPaintBrush = faPaintBrush;
  faLaptopCode = faLaptopCode;
  faHeart = faHeart;
  faList = faList;
  faChessBoard = faChessBoard;


  constructor() {}

  ngOnInit(): void {}
}
