
export type SubRequestCardRequirements = {
  subRequestId: number,
  location: string,
  dateOfSubstitution: Date,
  timeSlotHour: number,
  handlePickUpSubRequest: (subRequestId: number) => void
}