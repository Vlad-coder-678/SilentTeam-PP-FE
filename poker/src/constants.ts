import { ROLES } from './types/common';

const MAX_CHAT_MESSAGE_LENGTH = 120;

const KICK = 'kick';
const KICKED_ID = 'kicked_user';

const INIT_MEMBER = { userId: '', firstName: '', lastName: '', role: ROLES.USER };

export { MAX_CHAT_MESSAGE_LENGTH, KICK, KICKED_ID, INIT_MEMBER };
