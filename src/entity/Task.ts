import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";
import { User } from "./User";

@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    task: string;

    @OneToOne(type => User, user => user.task)
    @JoinColumn()
    user: User;

}
