import { OnDestroy, Directive, Component } from '@angular/core';

import { Subject } from 'rxjs';

@Component({selector: 'app-on-destroy', template: ''})
export abstract class OnDestroyComponent implements OnDestroy {
    protected ngUnsubscribe: Subject<any> = new Subject<any>();

    constructor() {
        this.guaranteeChildOnDestroy();
    }

    public ngOnDestroy() {}

    private unsubscribeAll(): void {
        this.ngUnsubscribe.next(true);
        this.ngUnsubscribe.complete();
    }

    private guaranteeChildOnDestroy(): void {
        const orginalOnDestroy = this.ngOnDestroy;
        this.ngOnDestroy = () => {
            this.unsubscribeAll();
            orginalOnDestroy.apply(this);
        };
    }
}
