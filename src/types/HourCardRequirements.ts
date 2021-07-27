/* eslint-disable no-unused-vars */
export type HourCardRequirements = {
  timeSlotId: number,
  hour: number,
  day: number,
  isClaimedByUser: boolean,
  location: string,
  adorerCount: number,
  minimumAdorers: number,
  parishId: number,
  subRequests?: string[],
  showProgress?: boolean
  claim: (timeSlotId:number) => void
  setModalTimeSlotId: (timeSlotId:number) => void
}
