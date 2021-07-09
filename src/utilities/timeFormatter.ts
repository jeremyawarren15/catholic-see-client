export const getTimeString = (timeIndex:number):string => {
  if (timeIndex > 23 || timeIndex < 0) return "";
  if (timeIndex == 0) return "12 AM";
  if (timeIndex == 12) return "12 PM";
  if (timeIndex < 12) {
    return timeIndex + " AM";
  } else {
    return timeIndex % 12 + " PM";
  }
}