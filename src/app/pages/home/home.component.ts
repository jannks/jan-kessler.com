import { Component, OnInit } from '@angular/core';
import { SnakeBlock } from 'src/app/elements/snake-nav/snake/snake-block';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public snakeHead = new SnakeBlock(0, 0, '#1389FD', null);

    public snakeBlocks = [
        new SnakeBlock(3, 5, '#F5F6F8', 'git'),
        new SnakeBlock(2, 5, '#F5F6F8', 'git'),
        new SnakeBlock(1, 5, '#F5F6F8', 'git'),
        new SnakeBlock(0, 5, '#F5F6F8', 'git'),
        new SnakeBlock(0, 6, '#F5F6F8', 'git'),
        new SnakeBlock(0, 7, '#F5F6F8', 'git'),
        new SnakeBlock(0, 8, '#F5F6F8', 'git'),
        new SnakeBlock(0, 9, '#F5F6F8', 'git'),
        new SnakeBlock(1, 9, '#F5F6F8', 'git'),
        new SnakeBlock(2, 9, '#F5F6F8', 'git'),
        new SnakeBlock(3, 9, '#F5F6F8', 'git'),
        new SnakeBlock(3, 8, '#F5F6F8', 'git'),
        new SnakeBlock(3, 7, '#F5F6F8', 'git'),
        new SnakeBlock(2, 7, '#F5F6F8', 'git'),

        new SnakeBlock(5, 5, '#F5F6F8', 'git'),
        new SnakeBlock(5, 7, '#F5F6F8', 'git'),
        new SnakeBlock(5, 8, '#F5F6F8', 'git'),
        new SnakeBlock(5, 9, '#F5F6F8', 'git'),

        new SnakeBlock(8, 5, '#F5F6F8', 'git'),
        new SnakeBlock(7, 6, '#F5F6F8', 'git'),
        new SnakeBlock(8, 6, '#F5F6F8', 'git'),
        new SnakeBlock(9, 6, '#F5F6F8', 'git'),
        new SnakeBlock(8, 7, '#F5F6F8', 'git'),
        new SnakeBlock(8, 8, '#F5F6F8', 'git'),
        new SnakeBlock(8, 9, '#F5F6F8', 'git'),
        new SnakeBlock(9, 9, '#F5F6F8', 'git'),

        new SnakeBlock(5, 16, '#ff66ff', 'email'),
        new SnakeBlock(5, 15, '#ff66ff', 'email'),
        new SnakeBlock(4, 15, '#ff66ff', 'email'),
        new SnakeBlock(3, 15, '#ff66ff', 'email'),
        new SnakeBlock(3, 16, '#ff66ff', 'email'),
        new SnakeBlock(3, 17, '#ff66ff', 'email'),
        new SnakeBlock(4, 17, '#ff66ff', 'email'),
        new SnakeBlock(5, 17, '#ff66ff', 'email'),
        new SnakeBlock(6, 17, '#ff66ff', 'email'),
        new SnakeBlock(7, 17, '#ff66ff', 'email'),
        new SnakeBlock(7, 16, '#ff66ff', 'email'),
        new SnakeBlock(7, 15, '#ff66ff', 'email'),
        new SnakeBlock(7, 14, '#ff66ff', 'email'),
        new SnakeBlock(7, 13, '#ff66ff', 'email'),
        new SnakeBlock(6, 13, '#ff66ff', 'email'),
        new SnakeBlock(5, 13, '#ff66ff', 'email'),
        new SnakeBlock(4, 13, '#ff66ff', 'email'),
        new SnakeBlock(3, 13, '#ff66ff', 'email'),
        new SnakeBlock(2, 13, '#ff66ff', 'email'),
        new SnakeBlock(1, 13, '#ff66ff', 'email'),
        new SnakeBlock(1, 14, '#ff66ff', 'email'),
        new SnakeBlock(1, 15, '#ff66ff', 'email'),
        new SnakeBlock(1, 16, '#ff66ff', 'email'),
        new SnakeBlock(1, 17, '#ff66ff', 'email'),
        new SnakeBlock(1, 18, '#ff66ff', 'email'),
        new SnakeBlock(1, 19, '#ff66ff', 'email'),
        new SnakeBlock(2, 19, '#ff66ff', 'email'),
        new SnakeBlock(3, 19, '#ff66ff', 'email'),
        new SnakeBlock(4, 19, '#ff66ff', 'email'),
        new SnakeBlock(5, 19, '#ff66ff', 'email'),
        new SnakeBlock(6, 19, '#ff66ff', 'email'),
        new SnakeBlock(7, 19, '#ff66ff', 'email')
    ];

    private gitBlockSize = 26;
    private emailBlockCount = 32;

    constructor() {}

    ngOnInit(): void {}

    public reset(): void {
        this.gitBlockSize = 26;
        this.emailBlockCount = 32;
    }

    public reduceBlockSize(block: SnakeBlock): void {
        if (block.type === 'git') {
            this.gitBlockSize--;

            if (this.gitBlockSize === 0) {
                const win = window.open('https://github.com/jannks', '_blank');
                win.focus();
            }
        } else if (block.type === 'email') {
            this.emailBlockCount--;

            if (this.emailBlockCount === 0) {
                window.location.href = 'mailto:info@jan-kessler.com';
            }
        }
    }
}
