import { SnakeBlock } from './snake-block';
import { Subscription, interval, Subject } from 'rxjs';
import { SnakeControls } from './snake-controls';

export class Snake {
    public cols: number;
    public rows: number;

    private movedSubject = new Subject<any>();
    public moved$ = this.movedSubject.asObservable();

    private blocks: SnakeBlock[];
    private lastControl = 'ArrowRight';
    private lastCol: number;
    private lastRow: number;

    private snakeControls: SnakeControls;

    private intervalSub: Subscription;
    private controlSub: Subscription;

    constructor(head: SnakeBlock, cols: number, rows: number) {
        this.blocks = [head];
        this.cols = cols;
        this.rows = rows;

        this.snakeControls = new SnakeControls();

        this.start();
    }

    public start(): void {
        this.snakeControls.start();

        this.intervalSub = interval(150).subscribe(() => {
            let isHead = true;
            for (const block of this.blocks) {
                const oldRow = block.row;
                const oldCol = block.col;

                if (isHead) {
                    // calc new position
                    block.direction = this.lastControl;
                    block.calcNextPosition(this.cols, this.rows);
                    isHead = false;
                } else {
                    // set forerunner position
                    block.col = this.lastCol;
                    block.row = this.lastRow;
                }

                this.lastCol = oldCol;
                this.lastRow = oldRow;
            }
            this.movedSubject.next();
        });

        this.controlSub = this.snakeControls.lastControl$.subscribe((key: string) => {
            // snake cannot be controlled in itself
            if (
                this.blocks.length === 1 ||
                (this.lastControl === 'ArrowLeft' && key !== 'ArrowRight') ||
                (this.lastControl === 'ArrowRight' && key !== 'ArrowLeft') ||
                (this.lastControl === 'ArrowUp' && key !== 'ArrowDown') ||
                (this.lastControl === 'ArrowDown' && key !== 'ArrowUp')
            ) {
                this.lastControl = key;
            }
        });
    }

    public stop(): void {
        this.intervalSub.unsubscribe();
        this.controlSub.unsubscribe();
        this.snakeControls.stop();
    }

    public reset(head: SnakeBlock, cols: number, rows: number): void {
        this.blocks = [head];
        this.cols = cols;
        this.rows = rows;
        this.lastControl = 'ArrowRight';
    }

    public addBlock(newBlock: SnakeBlock): void {
        newBlock.eaten = true;
        newBlock.col = this.lastCol;
        newBlock.row = this.lastRow;
        this.blocks.push(newBlock);
    }
}
