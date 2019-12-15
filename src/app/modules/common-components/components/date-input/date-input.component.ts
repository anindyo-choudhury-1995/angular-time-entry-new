import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "app-date-input",
    templateUrl: "./date-input.component.html",
    styleUrls: ["./date-input.component.scss"]
})
export class DateInputComponent implements OnInit {
    minStartDate = new Date("07 Dec 2019");
    maxStartDate = new Date("13 Dec 2019");

    minEndDate = new Date();
    maxEndDate = new Date();

    @Input() startDate = new Date();
    endDate = new Date();

    sliderChecked = false;
    constructor() {}

    ngOnInit() {}
}
