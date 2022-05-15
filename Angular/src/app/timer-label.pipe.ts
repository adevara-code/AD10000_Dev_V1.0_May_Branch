import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "timerLabel"
})
export class TimerLabelPipe implements PipeTransform {
  transform(dateTime: Date): string {
    // const dateTime = new Date('2019-11-08T18:38:16.001Z');

    const utcHours = dateTime.getUTCHours();
    const utcMins = dateTime.getUTCMinutes();

    if (utcHours >= 18 || utcHours < 9) {
      return "Closed";
    }

    if (utcHours >= 16) {
      return "Aftermarket";
    }

    if (utcHours === 9 && utcMins < 31) {
      return "Premartket";
    }

    return "Open";
  }
}
