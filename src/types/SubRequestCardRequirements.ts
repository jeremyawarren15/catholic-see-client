
export type SubRequestCardRequirements = {
  subRequestId: number,
  location: string,
  dateOfSubstitution: Date,
  timeSlotHour: number,
  handleClaimSubRequest: (subRequestId: number) => void
}