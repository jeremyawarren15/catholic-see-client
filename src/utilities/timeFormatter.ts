export const getTimeString = (timeIndex: number): string => {
  if (timeIndex > 23 || timeIndex < 0) return '';
  if (timeIndex === 0) return '12 AM';
  if (timeIndex === 12) return '12 PM';
  if (timeIndex < 12) {
    return `${timeIndex} AM`;
  }
  return `${timeIndex % 12} PM`;
};

export const getHourTimeSpanString = (timeIndex: number): string => {
  console.log(timeIndex)
  if (timeIndex > 23 || timeIndex < 0) return '';
  if (timeIndex === 0) return '12-1 AM';
  if (timeIndex === 11) return '11 AM-12 PM'
  if (timeIndex === 12) return '12-1 PM';
  if (timeIndex === 23) return '11 PM-12 AM';
  if (timeIndex < 12) {
    return `${timeIndex}-${timeIndex + 1} AM`;
  }
  const modulatedHourIndex = timeIndex % 12;
  return `${modulatedHourIndex}-${modulatedHourIndex + 1} PM`;
}
