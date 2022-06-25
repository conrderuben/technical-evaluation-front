
import {User} from '../Model/User'
import {Team} from '../Model/Team'

export class Expense{
    public id:number;
    public amount:number;
    public description:string;
    public date: Date;
    public user: User;
    public team:Team;

}