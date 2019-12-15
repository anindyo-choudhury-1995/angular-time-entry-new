import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
    newDate = [
        new Date("14 Dec 2019"),
        new Date("15 Dec 2019"),
        new Date("16 Dec 2019"),
        new Date("17 Dec 2019"),
        new Date("18 Dec 2019"),
        new Date("19 Dec 2019"),
        new Date("20 Dec 2019")
    ];

    selectedDate = 1;

    constructor() {}

    ngOnInit() {}
    selectedDateTracker($event) {
        this.selectedDate = $event;
    }
}
