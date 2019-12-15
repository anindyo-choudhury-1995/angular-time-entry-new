import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-item-list",
    templateUrl: "./item-list.component.html",
    styleUrls: ["./item-list.component.scss"]
})
export class ItemListComponent implements OnInit {
    listItems = [
        {
            srNumber: "Customer Workshop or Cloud Day",
            taskType: "Training/Personal Development - Taken",
            deliveryType: "Face To Face",
            time: 1,
            note:
                "Customer Workshop or Cloud Day Training/Personal Development - Taken Face To Face"
        },
        {
            srNumber:
                "Cloud Coach-sanela.hodzic@oracle.com-Oracle University (CHICAGO, US) - 225(REDWOOD CITY, US)",
            taskType: "Corporate Citizenship",
            deliveryType: "Remote",
            time: 2,
            note: ""
        },
        {
            srNumber:
                "Discovery-sanela.hodzic@oracle.com-Oracle University (CHICAGO, US) - 225(REDWOOD CITY, US)",
            taskType: "Follow-up",
            deliveryType: "Face to Face",
            time: 1,
            note: ""
        },
        {
            srNumber: "Non Service",
            taskType: "Time Off",
            deliveryType: "",
            time: 1,
            note: ""
        }
    ];

    constructor() {}

    ngOnInit() {}
}
