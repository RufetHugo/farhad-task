import {Component} from '@angular/core';

@Component({
    selector: 'app-modules',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent {
    dataRoles: any;

    data = [
        {
            id: 1,
            name: 'Admin',
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
        },
        {
            id: 2,
            name: 'Admin2',
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
        },
        {
            id: 3,
            name: 'Admin3',
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
        },
    ]

    eventNav($event: any) {
        console.log($event, 'sdad');
        this.dataRoles = $event
    }

    createGroup($event: any) {
        this.data.push(JSON.parse($event));
        console.log(this.data, 'data')
    }

    deleteGroup($event: any) {
        let index = this.data.findIndex(x => x.id === $event.id)
        this.data.splice(index, 1)
    }

    eventRoles($event: any) {
        let index = this.data.findIndex(x => x.id === $event.id)
        this.data[index] = $event
    }
}
