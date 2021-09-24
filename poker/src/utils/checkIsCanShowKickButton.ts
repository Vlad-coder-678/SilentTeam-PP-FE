import { KICKED_ID, MIN_COUNT_USERS_IN_ROOM_TO_KICK_VOITING } from '../constants';

const checkIsCanShowKickButton = (
  userId: string,
  isAdmin: boolean,
  currentUserId: string,
  currentAdminId: string,
  countUsers: number,
): boolean => {
  if (isAdmin && currentUserId === userId) return false;
  if (countUsers < MIN_COUNT_USERS_IN_ROOM_TO_KICK_VOITING) return false;
  if (currentUserId === userId) return false;
  if (currentAdminId === userId) return false;
  if (userId === KICKED_ID) return false;
  return true;
};

export default checkIsCanShowKickButton;
