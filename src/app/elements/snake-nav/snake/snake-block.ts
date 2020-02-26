export class SnakeBlock {
    public col: number;
    public row: number;
    public color: string;

    public eaten = false;
    public type: string;
    public direction: string;

    public background: string;

    constructor(col: number, row: number, color: string, type: string) {
        this.color = color;
        this.col = col;
        this.row = row;
        this.type = type;
        this.background = this.color;
    }

    public get style(): any {
        return {
            top: Number(this.row * 20) + 'px',
            left: Number(this.col * 20) + 'px',
            'background-color': this.background
        };
    }

    public get top(): number {
        return this.top * 20;
    }

    /**
     * calculates the new position depending on the direction
     * @param cols container cols
     * @param rows container rows
     */
    public calcNextPosition(cols: number, rows: number): void {
        switch (this.direction) {
            case 'ArrowRight':
                this.col = this.col < cols ? this.col + 1 : 0;
                break;
            case 'ArrowLeft':
                this.col = this.col > 0 ? this.col - 1 : cols;
                break;
            case 'ArrowUp':
                this.row = this.row > 0 ? this.row - 1 : rows;
                break;
            case 'ArrowDown':
                this.row = this.row < rows ? this.row + 1 : 0;
                break;
        }
    }

    /**
     * calculates the previous position depending on the direction
     * @param cols container cols
     * @param rows container rows
     */
    public calcLastPosition(cols: number, rows: number): void {
        switch (this.direction) {
            case 'ArrowRight':
                this.col = this.col > 0 ? this.col - 1 : cols;
                break;
            case 'ArrowLeft':
                this.col = this.col < cols ? this.col + 1 : 0;
                break;
            case 'ArrowUp':
                this.row = this.row < rows ? this.row + 1 : 0;
                break;
            case 'ArrowDown':
                this.row = this.row > 0 ? this.row - 1 : rows;
                break;
        }
    }
}
