import {Component, OnInit, Output} from '@angular/core';
import {animate, query, state, style, transition, trigger} from '@angular/animations';
import {EventEmitter} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-list-sections',
    templateUrl: './list-sections.component.html',
    styleUrls: ['./list-sections.component.css']
})

export class ListSectionsComponent implements OnInit {
    private isShow = false;
    // tslint:disable-next-line:no-output-on-prefix
    @Output() onStatusChange: EventEmitter<boolean> = new EventEmitter();

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    public hiddenMenu(): void {
        this.isShow = !this.isShow;
        this.onStatusChange.emit(this.isShow);
    }

    goToSettings(): void {
        this.isShow = !this.isShow;
        this.onStatusChange.emit(this.isShow);
        this.router.navigateByUrl('settings');
    }
}
