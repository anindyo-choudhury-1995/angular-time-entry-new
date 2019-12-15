import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-day-tracker",
    templateUrl: "./day-tracker.component.html",
    styleUrls: ["./day-tracker.component.scss"]
})
export class DayTrackerComponent implements OnInit {
    @Output() selectedDate = new EventEmitter<number>();

    dayTrackers = [
        {
            time: "0.00",
            day: "S",
            id: 0,
            selected: false
        },
        {
            time: "0.00",
            day: "S",
            id: 1,
            selected: false
        },
        {
            time: "2.00",
            day: "M",
            id: 2,
            selected: false
        },
        {
            time: "2.00",
            day: "T",
            id: 3,
            selected: false
        },
        {
            time: "2.0",
            day: "W",
            id: 4,
            selected: false
        },
        {
            time: "2.0",
            day: "T",
            id: 5,
            selected: false
        },
        {
            time: "6.0",
            day: "F",
            id: 6,
            selected: true
        }
    ];

    constructor() {}

    ngOnInit() {}

    selectDayById(dayId) {
        this.dayTrackers.forEach(dayObj => {
            dayObj.selected = dayObj.id === dayId ? true : false;
        });
        this.selectedDate.emit(dayId);
    }
}
