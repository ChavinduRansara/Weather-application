import { ICON_BASE_URL,COLORS } from "./constants";

export const selectcolor = (temp) => {
    // Function to select color based on temperature
    if (temp < 0) {
      return COLORS.darkBlue;
    } else if (temp >= 0 && temp < 5) {
      return COLORS.lightBlue;
    } else if (temp >= 5 && temp < 10) {
      return COLORS.darkPurple;
    } else if (temp >= 10 && temp < 15) {
      return COLORS.purple;
    } else if (temp >= 15 && temp < 20) {
      return COLORS.darkGreen;
    } else if (temp >= 20 && temp < 25) {
      return COLORS.lightGreen;
    } else if (temp >= 25 && temp < 30) {
      return COLORS.darkBrown;
    } else if (temp >= 30 && temp < 35) {
      return COLORS.brown;
    } else if (temp >= 35 && temp < 40) {
      return COLORS.darkRed;
    } else if (temp >= 40) {
      return COLORS.red;
    }
  };

  export const dateTimeformatter = (unixTime) => {
    // Function to format UNIX timestamp
    let milliseconds = unixTime * 1000;
    let dateObject = new Date(milliseconds);

    const timeOptions = { hour: "2-digit", minute: "2-digit", hour12: true };
    const datOptions = { month: "short", day: "numeric" };
    let time = dateObject.toLocaleTimeString("en-US", timeOptions);
    let date = dateObject.toLocaleDateString("en-US", datOptions);

    return [date, time];
  };

  export const geticonUrl = (icon) => {
    // Function to get weather icon URL
    return `${ICON_BASE_URL}${icon}.png`;
  };