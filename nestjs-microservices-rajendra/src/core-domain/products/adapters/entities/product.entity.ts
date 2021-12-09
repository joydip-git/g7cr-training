import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({
    name:'products'
})
export class Product {
    constructor(){
        console.log('product entity created')
    }

    @PrimaryGeneratedColumn({
        name:'productid',
        type:'integer',
    })
    productId: number;

    @Column({
        name:'productname',
        type:"character varying"
    })
    productName: string;

    @Column({
        name:'description',
        type:"character varying"
    })
    description: string;

    @Column({
        name:'releasedon',
        type:"character varying"
    })
    releaseDate: string;

    @Column({
        name:'price',
        type:"numeric"
    })
    price: number;

    @Column({
        name:'likes',
        type:"integer"
    })
    likes?: number;

     @Column({
        name:'imagepath',
        type:"character varying"
    })
    imageUrl: string;
}