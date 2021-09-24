import { HourCardRequirements } from '../types/HourCardRequirements';
import { SubRequestCardRequirements } from '../types/SubRequestCardRequirements';
import { SubRequestListItem } from '../types/SubRequestListItem';
import useApi from './useApi';

const useHoursApi = () => {
  const api = useApi();

  return {
    getHours: () => api.get<HourCardRequirements[]>("/api/availableHours"),
    getClaimedHours: () => api.get<HourCardRequirements[]>("/api/claimedHours"),
    getSubRequests: () => api.get<SubRequestCardRequirements[]>("/api/subRequests"),
    getPersonalSubRequests: () => api.get<SubRequestListItem[]>("/api/subRequests/personal"),
    getClaimedSubRequests: () => api.get<SubRequestListItem[]>("/api/subRequests/claimed"),
    pickUpSubRequest: (subRequestId: number) => api.post("/api/subRequest/pickUp/" + subRequestId),
    claimHour: (timeSlotId: number) => api.post("/api/hour/claim/" + timeSlotId),
    unclaimHour: (timeSlotId: number) => api.post("/api/hour/unclaim/" + timeSlotId),
    createSubRequest: (
      timeSlotId: number,
      dateOfSubstitution: Date,
    ) => api.post('/api/subRequest/create', { timeSlotId, dateOfSubstitution }),
    cancelSubRequest: (subRequestId: number) => api.post(`/api/subRequest/cancel/${subRequestId}`)
  };
}

export default useHoursApi;