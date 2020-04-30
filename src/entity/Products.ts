import {Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Entity, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { User } from "./User";

@Entity()
export class Products {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("varchar")
    category: string;

    @Column("int")
    price: number;

    @Column("int")
    stock: number;

    @Column("varchar")
    name: string;

    @CreateDateColumn()
    date: Date;

    @UpdateDateColumn()
    updateDate: Date

    @ManyToOne(type => User, user => user.products)
    @JoinColumn()
    user: User;


}
