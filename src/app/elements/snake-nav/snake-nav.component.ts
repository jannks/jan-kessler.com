import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { SnakeBlock } from './snake/snake-block';
import { Snake } from './snake/snake';

@Component({
    selector: 'app-snake-nav',
    templateUrl: './snake-nav.component.html',
    styleUrls: ['./snake-nav.component.scss']
})
export class SnakeNavComponent implements OnInit, OnDestroy {
    @Input() defaultBlocks: SnakeBlock[];
    @Input() snakeHead: SnakeBlock;
    @Input() centerBlocks = false;

    @Output() eaten = new EventEmitter<SnakeBlock>();
    @Output() resetSize = new EventEmitter<any>();

    public blocks: SnakeBlock[]; // blocks[0] == head

    private container;
    private cols = 0; // container width / 20
    private rows = 0; // container height / 20

    private snake: Snake;

    private resizeSub: Subscription;
    private snakeSub: Subscription;

    constructor() {}

    ngOnInit(): void {
        this.container = document.getElementById('sn-container');
        this.setContainerDims();

        this.reset();

        this.snake = new Snake(this.blocks[0], this.cols, this.rows);

        // checks if the head collides with a block
        this.snakeSub = this.snake.moved$.subscribe(() => {
            for (let i = 1; i < this.blocks.length; i++) {
                if (this.blocks[i].row === this.blocks[0].row && this.blocks[i].col === this.blocks[0].col) {
                    if (this.blocks[i].eaten) {
                        // block is already => lost
                        this.reset();
                    } else {
                        this.snake.addBlock(this.blocks[i]);
                        this.eaten.emit(this.blocks[i]);
                    }
                    break;
                }
            }
        });

        this.resizeSub = fromEvent(window, 'resize').subscribe(() => {
            this.setContainerDims();
            this.reset();
        });
    }

    ngOnDestroy(): void {
        this.resizeSub.unsubscribe();
        this.snakeSub.unsubscribe();
        this.snake.stop();
    }

    public reset(): void {
        this.resetSize.emit();

        this.blocks = [];
        this.blocks.push(new SnakeBlock(this.snakeHead.col, this.snakeHead.row, this.snakeHead.color, this.snakeHead.type));

        // create copy of default blocks
        const offsetLeft = this.centerBlocks ? this.calcLeftCenter(this.defaultBlocks) : 0;
        for (const block of this.defaultBlocks) {
            this.blocks.push(new SnakeBlock(block.col + offsetLeft, block.row, block.color, block.type));
        }

        if (this.snake) {
            this.snake.reset(this.blocks[0], this.cols, this.rows);
        }
    }

    private calcLeftCenter(blocks: SnakeBlock[]): number {
        let minCol = this.cols;
        let maxCol = 0;
        for (const block of blocks) {
            if (block.col > maxCol) {
                maxCol = block.col;
            }
            if (block.col < minCol) {
                minCol = block.col;
            }
        }
        return Math.floor((this.cols - (maxCol - minCol)) / 2);
    }

    private setContainerDims(): void {
        this.rows = Math.floor(this.container.offsetHeight / 20);
        this.cols = Math.floor(this.container.offsetWidth / 20);
    }
}
