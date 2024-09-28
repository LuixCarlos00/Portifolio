import { Component, ElementRef, ViewChild } from '@angular/core';
import swal from 'sweetalert';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.css']
})
export class SnakeComponent {
  @ViewChild('gameBoard') gameBoard!: ElementRef<HTMLDivElement>;
  snake: { x: number, y: number }[] = [];
  food: { x: number, y: number } = { x: 0, y: 0 };
  direction: { x: number, y: number } = { x: 20, y: 0 };
  gameInterval: any;
  score: number = 0;
  readonly cellSize = 20; // Tamanho da célula
  readonly boardSize = 240; // Tamanho do tabuleiro

  constructor() { }

  ngOnInit() {
    this.resetGame();
  }

  resetGame() {
    this.snake = [{ x: 100, y: 100 }];
    this.direction = { x: this.cellSize, y: 0 };
    this.score = 0;
    this.placeFood();
  }

  placeFood() {
    let newFoodPosition: { x: number, y: number };
    do {
      newFoodPosition = {
        x: Math.floor(Math.random() * (this.boardSize / this.cellSize)) * this.cellSize,
        y: Math.floor(Math.random() * (this.boardSize / this.cellSize)) * this.cellSize
      };
    } while (this.snake.some(segment => segment.x === newFoodPosition.x && segment.y === newFoodPosition.y));
    this.food = newFoodPosition;
  }

  isCollision(position: { x: number, y: number }): boolean {
    if (position.x < 0 || position.y < 0 || position.x >= this.boardSize || position.y >= this.boardSize) {
      return true;
    }
    return this.snake.some(segment => segment.x === position.x && segment.y === position.y);
  }

  updateGame() {
    const head = { x: this.snake[0].x + this.direction.x, y: this.snake[0].y + this.direction.y };

    if (this.isCollision(head)) {
      clearInterval(this.gameInterval);
      this.gameInterval = null;
      swal({
        title: "Game Over!",
        text: "Tente Novamente",
        icon: "error",
      });
      return;
    }

    this.snake.unshift(head);

    if (head.x === this.food.x && head.y === this.food.y) {
      this.score++;
      this.placeFood();
    } else {
      this.snake.pop();
    }
  }

  startGame() {
    if (this.gameInterval) {
      return;  // Se já houver um jogo em andamento, não faz nada
    }
    this.resetGame();
    this.gameInterval = setInterval(() => this.updateGame(), 350);
    window.addEventListener('keydown', this.changeDirection.bind(this));
  }

  changeDirection(event: { key: string }) {
    switch (event.key) {
      case 'ArrowUp':
        if (this.direction.y === 0) {
          this.direction = { x: 0, y: -this.cellSize };
        }
        break;
      case 'ArrowDown':
        if (this.direction.y === 0) {
          this.direction = { x: 0, y: this.cellSize };
        }
        break;
      case 'ArrowLeft':
        if (this.direction.x === 0) {
          this.direction = { x: -this.cellSize, y: 0 };
        }
        break;
      case 'ArrowRight':
        if (this.direction.x === 0) {
          this.direction = { x: this.cellSize, y: 0 };
        }
        break;
    }
  }
}
