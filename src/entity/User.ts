import {Entity, PrimaryGeneratedColumn, Column, OneToOne, CreateDateColumn, OneToMany} from "typeorm";
import { Task } from "./Task";
import { Products } from "./Products";

export enum UserRole {
    SUPERADMIN = "superadmin",
    ADMIN = "admin",
    COMMONUSER = "commonuser"
}

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column("varchar")
    email: string;

    @Column("varchar")
    password: string;

    @CreateDateColumn()
    date: Date

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.ADMIN
    })
    role: UserRole

    @OneToOne(type => Task, task => task.user)
    task: Task

    @OneToMany(type => Products, products => products.user )
    products: Products[] 
}
