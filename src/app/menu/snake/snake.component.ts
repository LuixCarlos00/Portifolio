import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import swal from 'sweetalert';
import { Position } from '../../core/models';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.css']
})
export class SnakeComponent implements OnInit, OnDestroy {
  private static readonly CELL_SIZE = 20;
  private static readonly BOARD_SIZE = 240;
  private static readonly GAME_SPEED_MS = 350;
  private static readonly INITIAL_POSITION: Position = { x: 100, y: 100 };

  private readonly keydownHandler = this.changeDirection.bind(this);
  private gameInterval: ReturnType<typeof setInterval> | null = null;

  @ViewChild('gameBoard') gameBoard!: ElementRef<HTMLDivElement>;

  snake: Position[] = [];
  food: Position = { x: 0, y: 0 };
  direction: Position = { x: SnakeComponent.CELL_SIZE, y: 0 };
  score = 0;

  readonly cellSize = SnakeComponent.CELL_SIZE;
  readonly boardSize = SnakeComponent.BOARD_SIZE;

  constructor() {}

  ngOnInit(): void {
    this.resetGame();
  }

  private resetGame(): void {
    this.snake = [{ ...SnakeComponent.INITIAL_POSITION }];
    this.direction = { x: SnakeComponent.CELL_SIZE, y: 0 };
    this.score = 0;
    this.placeFood();
  }

  private placeFood(): void {
    let newFoodPosition: Position;
    do {
      newFoodPosition = {
        x: Math.floor(Math.random() * (this.boardSize / this.cellSize)) * this.cellSize,
        y: Math.floor(Math.random() * (this.boardSize / this.cellSize)) * this.cellSize
      };
    } while (this.snake.some(segment => segment.x === newFoodPosition.x && segment.y === newFoodPosition.y));
    this.food = newFoodPosition;
  }

  private isCollision(position: Position): boolean {
    if (position.x < 0 || position.y < 0 || position.x >= this.boardSize || position.y >= this.boardSize) {
      return true;
    }
    return this.snake.some(segment => segment.x === position.x && segment.y === position.y);
  }

  private updateGame(): void {
    const head = { x: this.snake[0].x + this.direction.x, y: this.snake[0].y + this.direction.y };

    if (this.isCollision(head)) {
      if (this.gameInterval) {
        clearInterval(this.gameInterval);
        this.gameInterval = null;
      }
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

  startGame(): void {
    if (this.gameInterval) {
      return;
    }
    this.resetGame();
    this.gameInterval = setInterval(() => this.updateGame(), 350);
    window.addEventListener('keydown', this.keydownHandler);
  }

  ngOnDestroy(): void {
    this.cleanup();
  }

  private cleanup(): void {
    if (this.gameInterval) {
      clearInterval(this.gameInterval);
      this.gameInterval = null;
    }
    window.removeEventListener('keydown', this.keydownHandler);
  }

  handleDirectionClick(direction: string): void {
    this.setDirection(direction);
  }

  changeDirection(event: KeyboardEvent): void {
    this.setDirection(event.key);
  }

  private setDirection(key: string): void {
    switch (key) {
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
