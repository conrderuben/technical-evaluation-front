
import {User} from '../Model/User'
import {Team} from '../Model/Team'

export interface Expense{
    id:number;
    amount:number;
    description:string;
    date: Date;
    user: User;
    team:Team;

}