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
}
