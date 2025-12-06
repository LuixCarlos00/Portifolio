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
  private static readonly GRID_COUNT = 12; // BOARD_SIZE / CELL_SIZE
  private static readonly GAME_SPEED_MS = 150;
  private static readonly INITIAL_POSITION: Position = { x: 100, y: 100 };

  private static readonly KEY_MAP: Record<string, string> = {
    'w': 'ArrowUp', 'W': 'ArrowUp',
    'a': 'ArrowLeft', 'A': 'ArrowLeft',
    's': 'ArrowDown', 'S': 'ArrowDown',
    'd': 'ArrowRight', 'D': 'ArrowRight',
    'ArrowUp': 'ArrowUp',
    'ArrowDown': 'ArrowDown',
    'ArrowLeft': 'ArrowLeft',
    'ArrowRight': 'ArrowRight'
  };

  private readonly keydownHandler = this.changeDirection.bind(this);
  private gameInterval: ReturnType<typeof setInterval> | null = null;

  @ViewChild('gameBoard') gameBoard!: ElementRef<HTMLDivElement>;

  snake: Position[] = [];
  food: Position = { x: 0, y: 0 };
  direction: Position = { x: SnakeComponent.CELL_SIZE, y: 0 };
  score = 0;
  isPlaying = false;
  isPaused = false;
  highScore = 0;

  readonly cellSize = SnakeComponent.CELL_SIZE;
  readonly boardSize = SnakeComponent.BOARD_SIZE;

  constructor() {
    this.loadHighScore();
  }

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
    let attempts = 0;
    const maxAttempts = 100;
    
    do {
      // Gera posição entre 0 e (GRID_COUNT - 1) * CELL_SIZE
      // Para um board de 240px com células de 20px: 0, 20, 40, ..., 220
      const gridX = Math.floor(Math.random() * SnakeComponent.GRID_COUNT);
      const gridY = Math.floor(Math.random() * SnakeComponent.GRID_COUNT);
      
      newFoodPosition = {
        x: gridX * this.cellSize,
        y: gridY * this.cellSize
      };
      attempts++;
    } while (
      this.snake.some(segment => segment.x === newFoodPosition.x && segment.y === newFoodPosition.y) &&
      attempts < maxAttempts
    );
    
    // Validação extra para garantir que está dentro dos limites
    newFoodPosition.x = Math.min(newFoodPosition.x, this.boardSize - this.cellSize);
    newFoodPosition.y = Math.min(newFoodPosition.y, this.boardSize - this.cellSize);
    newFoodPosition.x = Math.max(0, newFoodPosition.x);
    newFoodPosition.y = Math.max(0, newFoodPosition.y);
    
    this.food = newFoodPosition;
  }

  private isCollision(position: Position): boolean {
    // Verifica colisão com as paredes
    // Limites: x e y devem estar entre 0 e (BOARD_SIZE - CELL_SIZE)
    const maxPosition = this.boardSize - this.cellSize;
    
    if (position.x < 0 || position.y < 0 || position.x > maxPosition || position.y > maxPosition) {
      return true;
    }
    
    // Verifica colisão com o próprio corpo (ignora a cabeça atual)
    return this.snake.slice(1).some(segment => segment.x === position.x && segment.y === position.y);
  }

  private updateGame(): void {
    const head = { x: this.snake[0].x + this.direction.x, y: this.snake[0].y + this.direction.y };

    if (this.isCollision(head)) {
      this.gameOver();
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
    this.isPlaying = true;
    this.isPaused = false;
    this.gameInterval = setInterval(() => this.updateGame(), SnakeComponent.GAME_SPEED_MS);
    window.addEventListener('keydown', this.keydownHandler);
  }

  pauseGame(): void {
    if (this.gameInterval) {
      clearInterval(this.gameInterval);
      this.gameInterval = null;
      this.isPaused = true;
      this.isPlaying = false;
    }
  }

  resumeGame(): void {
    if (this.isPaused && !this.gameInterval) {
      this.isPlaying = true;
      this.isPaused = false;
      this.gameInterval = setInterval(() => this.updateGame(), SnakeComponent.GAME_SPEED_MS);
    }
  }

  private gameOver(): void {
    this.cleanup();
    this.isPlaying = false;
    this.saveHighScore();
    
    swal({
      title: "Game Over!",
      text: `Pontuação: ${this.score} | Recorde: ${this.highScore}`,
      icon: "error",
      buttons: {
        retry: {
          text: "Jogar Novamente",
          value: true
        }
      }
    }).then((willRetry) => {
      if (willRetry) {
        this.startGame();
      }
    });
  }

  private loadHighScore(): void {
    const saved = localStorage.getItem('snake_highscore');
    this.highScore = saved ? parseInt(saved, 10) : 0;
  }

  private saveHighScore(): void {
    if (this.score > this.highScore) {
      this.highScore = this.score;
      localStorage.setItem('snake_highscore', this.highScore.toString());
    }
  }

  ngOnDestroy(): void {
    this.cleanup();
  }

  private cleanup(): void {
    if (this.gameInterval) {
      clearInterval(this.gameInterval);
      this.gameInterval = null;
    }
    this.isPlaying = false;
    window.removeEventListener('keydown', this.keydownHandler);
  }

  handleDirectionClick(direction: string): void {
    if (!this.isPlaying && !this.isPaused) {
      this.startGame();
    }
    this.setDirection(direction);
  }

  changeDirection(event: KeyboardEvent): void {
    event.preventDefault();
    const mappedKey = SnakeComponent.KEY_MAP[event.key];
    if (mappedKey) {
      if (!this.isPlaying && !this.isPaused) {
        this.startGame();
      }
      this.setDirection(mappedKey);
    }
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
