import { IssueChatItem } from '../types/common';

const isAllUsersVoted = (array: Array<IssueChatItem>): boolean => {
  const index = array.findIndex((el) => el.value === '-');
  return index === -1;
};

export default isAllUsersVoted;
