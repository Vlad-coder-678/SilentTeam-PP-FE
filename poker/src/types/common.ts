export enum ROLES {
  ADMIN = 'admin',
  OBSERVER = 'observer',
  USER = 'user',
}

export enum SIZES {
  SMALL = 'small',
  MEDIUM = 'medium',
}

export enum KICKED_MESSAGES {
  BY_ADMIN = 'kicked by scram master',
  BY_VOTING = 'kicked by voting',
}

export interface Member {
  userId: string;
  firstName: string;
  lastName?: string;
  job?: string;
  role: ROLES;
}

export interface Message {
  userId: string;
  firstName: string;
  lastName?: string;
  role: ROLES;
  message: string;
  type?: 'kick';
}

export interface SocketError {
  status: number;
  error: string;
  eventName: string;
}

export interface ResponseFromSocket {
  eventName: string;
  code: number;
  error: string;
  data: any;
}

export interface Issue {
  id?: string;
  title?: string;
  desc?: string;
}

export interface CardGameSetting {
  id: string;
  value: string;
}

export interface CardGame {
  card?: CardGameSetting;
  title: string;
  isChecked: boolean;
}

export interface GameSettingsInit {
  masterIsPlayer: boolean;
  isChangeCard: boolean;
  isNeededTimer: boolean;
  storyType: string;
  storyTypeShort: string;
  roundTime: number;
  minGameCardValue: number;
  maxGameCardValue: number;
}

export interface issueGame {
  id: string;
  title: string;
  desc: string;
  choise: string;
  isChecked: boolean;
}

export interface issueSelected {
  issueId: string;
  cardId: string;
}

export interface GameProcessInit {
  issueIdSelected: string;
  userGameResults: issueSelected[];
  resForVote: { userId: string; res: issueSelected[] }[];
  resForStat: { issueId: string; cards: { cardId: string; usersId: string[] }[] }[];
}

export interface SettingsFromServer {
  isAdminBePlayerInGame: boolean;
  isNeededTimer: boolean;
  storyTypeShort: string;
  roundTime: number;
}
