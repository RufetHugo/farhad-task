import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-roles',
    templateUrl: './roles.component.html',
    styleUrls: ['./roles.component.scss']
})
export class RolesComponent {
    @Input() dataRoles: any;
    @Output() changeRolesEvent = new EventEmitter<string>();
    data: any
    search: any
    searchData: any
    newRoles: any



    constructor() {}

    ngOnInit() {
        console.log(this.dataRoles, 'dataRoles')
        this.data = this.dataRoles;
    }

    changeRoles() {
        this.changeRolesEvent.emit(this.dataRoles);
    }

    serachFunc() {
    }

    addRoles() {
        let data = {
            id: Math.floor(Math.random() * 100),
            roleName: this.newRoles,
            role: true,
        }
        this.dataRoles.roles.push(data);
        this.newRoles = '';
    }
}
