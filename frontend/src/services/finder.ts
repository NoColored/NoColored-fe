import type { RoomListInfo } from '@/types/play';

import { api } from '@/services/index';

export const getRoomList = async () => {
  try {
    const response = await api.get<RoomListInfo>(true, 'play/friendly/`{1}`');
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
