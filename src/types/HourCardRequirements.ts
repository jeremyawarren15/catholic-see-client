import { SubRequestListItem } from './SubRequestListItem';

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
  subRequests?: SubRequestListItem[],
  showProgress?: boolean
  handleClaimHour: (timeSlotId:number) => void
  handleUnclaimHour: (timeSlotId:number) => void
  handleCancelSubRequest: (subRequestId:number) => void
}
