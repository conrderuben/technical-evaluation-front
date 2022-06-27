import { User } from '../Model/User';
import { Team } from '../Model/Team';
import { Id } from './Id';

export class Expense {
  id: Id;
  amount: number;
  description: string;
  date: Date;
  user: User;
  team: Team;
}
