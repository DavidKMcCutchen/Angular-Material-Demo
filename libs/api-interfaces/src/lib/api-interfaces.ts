export interface Message {
  message: string;
}

export interface BaseEntity {
  id: number;
};

export interface Note extends BaseEntity {
  title: string;
  date: Date;
};
export interface User extends BaseEntity {
  birthdate: Date;
  name: string;
  avatar: string;
  bio: string;
  notes: Note[];
};

export const emptyUser: User = {
  id: 0,
  birthdate: new Date ("1991-01-01"),
  name: '',
  avatar: '',
  bio: '',
  notes: []
};
