import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    @Input() datas: any
    @Output() newItemEvent = new EventEmitter<string>();
    @Output() newItemDeleteEvent = new EventEmitter<string>();
    @Output() newItemNewEvent = new EventEmitter<string>();

    index: number = 1;

    disbledValue: boolean = false;

    constructor() {
    }

    ngOnInit() {
        console.log(this.datas, 'ssdds')
    }

    addedGroup() {

    }

    toggleEditMode(item: any) {
        item.editMode = !item.editMode;

        if (!item.name.length) {
            this.newItemDeleteEvent.emit(item);
        }
    }

    disbled() {
        this.disbledValue = !this.disbledValue
    }

    activeUrl(id: number, nav: any) {
        this.index = id;
        this.newItemEvent.emit(nav);
    }


    createNav() {
        let newCreate = {
            id: 0,
            name: 'new group',
            editMode: false,
            roles: [
                {
                    id: 1,
                    roleName: 'Pizza editor',
                    role: true,
                },
                {
                    id: 2,
                    roleName: 'Dust sniffer',
                    role: true,
                },
                {
                    id: 3,
                    roleName: 'Poker',
                    role: true,
                },
            ]
        };
        newCreate.id = Math.floor(Math.random() * 1000);
        this.newItemNewEvent.emit(JSON.stringify(newCreate));
    }

}
