import { ICON_BASE_URL,COLORS } from "../Constants/constants";
import moment from "moment";

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

  export const dateTimeformatter = (unixTime,timeZone) => {
    // Function to format UNIX timestamp
    const time = moment.unix(unixTime).utcOffset(timeZone / 60).format("hh:mm A");
    const date = moment.unix(unixTime).utcOffset(timeZone / 60).format("MMM DD");
    return [date, time];
  };
  
  export const dateTimeformatterLive = (timeZone) => {
    // Function to format UNIX timestamp
    const time = moment.utc().add(timeZone, 'seconds').format('hh:mm A')
    const date = moment.utc().add(timeZone, 'seconds').format('MMM DD')
    return [date, time];
  };

  export const geticonUrl = (icon) => {
    // Function to get weather icon URL
    return `${ICON_BASE_URL}${icon}.png`;
  };