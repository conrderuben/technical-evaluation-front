
import {User} from '../Model/User'
import {Team} from '../Model/Team'

export class Expense{
    public id:number;
    public amount:number;
    public description:string;
    public date: Date;
    public user: User;
    public team:Team;

    // constructor(id:number,amount:number,description:string,date:Date,user:User,team:Team){
         
    //     this.id=id;
    //     this.amount=amount;
    //     this.description=description;
    //     this.date=date;
    //     this.user=user;
    //     this.team=team;
    // }
}