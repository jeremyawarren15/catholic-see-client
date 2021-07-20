export type HourCardRequirements = {
  hour: number,
  day: number,
  isClaimedByUser: boolean,
  location: string,
  numberOfAdorers: number,
  minimumAdorers: number,
  parishId: number,
  subRequests?: string[],
  showProgress?: boolean
}
