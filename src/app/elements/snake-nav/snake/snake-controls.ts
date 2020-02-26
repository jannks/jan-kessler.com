import { Subject, Subscription, fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';

export class SnakeControls {
    public static controls = new Set(['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown']);

    private lastControlSubject = new Subject<string>();
    public lastControl$ = this.lastControlSubject.asObservable();

    private touchX: number;
    private touchY: number;

    private keyUpSub: Subscription;
    private touchStartSub: Subscription;
    private touchEndSub: Subscription;

    constructor() {}

    public start(): void {
        this.keyUpSub = fromEvent(document, 'keydown')
            .pipe(filter((rawEvent: KeyboardEvent) => SnakeControls.controls.has(rawEvent.key)))
            .subscribe((controlEvent: KeyboardEvent) => {
                this.lastControlSubject.next(controlEvent.key);
            });

        // translate TouchEvent to KeyboardEvent
        fromEvent<TouchEvent>(document, 'touchstart').subscribe((event: TouchEvent) => {
            const touchObj = event.changedTouches[0];
            this.touchX = touchObj.pageX;
            this.touchY = touchObj.pageY;
        });

        fromEvent<TouchEvent>(document, 'touchend').subscribe((event: TouchEvent) => {
            const touchObj = event.changedTouches[0];
            const xDiff = Math.abs(this.touchX - touchObj.pageX);
            const yDiff = Math.abs(this.touchY - touchObj.pageY);

            if (xDiff > 10 || yDiff > 10) {
                const xType = this.touchX < touchObj.pageX ? 'ArrowRight' : 'ArrowLeft';
                const yType = this.touchY < touchObj.pageY ? 'ArrowDown' : 'ArrowUp';

                this.lastControlSubject.next(xDiff > yDiff ? xType : yType);
            }
        });
    }

    public stop(): void {
        this.keyUpSub.unsubscribe();
        this.touchStartSub.unsubscribe();
        this.touchEndSub.unsubscribe();
    }
}
