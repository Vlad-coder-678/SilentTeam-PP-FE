import { ROLES, Member } from './types/common';

const MAX_CHAT_MESSAGE_LENGTH = 120;

const KICK = 'kick';
const KICKED_ID = 'kicked_user';

const INIT_MEMBER: Member = { userId: '', lastName: '', firstName: '', job: '', role: ROLES.USER };

const MIN_COUNT_USERS_IN_ROOM_TO_KICK_VOITING = 3;

export { MAX_CHAT_MESSAGE_LENGTH, KICK, KICKED_ID, INIT_MEMBER, MIN_COUNT_USERS_IN_ROOM_TO_KICK_VOITING };
