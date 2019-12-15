import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-edit-details",
    templateUrl: "./edit-details.component.html",
    styleUrls: ["./edit-details.component.scss"]
})
export class EditDetailsComponent implements OnInit {
    selectedSRNumber = "Customer Workshop or Cloud Day";
    sRNumbers = [
        { value: "Customer Workshop or Cloud Day" },
        {
            value:
                "Cloud Coach-sanela.hodzic@oracle.com-Oracle University (CHICAGO, US) - 225(REDWOOD CITY, US)"
        },
        {
            value:
                "Discovery-sanela.hodzic@oracle.com-Oracle University (CHICAGO, US) - 225(REDWOOD CITY, US)"
        },
        { value: "Non Service" }
    ];
    taskTypes = [
        { value: "Training/Personal Development - Taken" },
        { value: "Corporate Citizenship" },
        { value: "Follow-up" }
    ];
    // selectedSRNumber =
    //     "Cloud Coach-sanela.hodzic@oracle.com-Oracle University (CHICAGO, US) - 225(REDWOOD CITY, US)";
    deliveryTypes = [{ value: "Remote" }, { value: "Face To Face" }];
    constructor() {}

    ngOnInit() {}
}
