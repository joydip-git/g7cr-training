/*
import { IsString, IsNumber } from 'class-validator'
export default class CreateProductCommand {
    @IsString()
    public releaseDate: string;
    @IsString()
    public productName: string;
    @IsString()
    public description: string;
    @IsString()
    public imageUrl: string;
    @IsNumber({
        allowInfinity: false,
        allowNaN: false,
        maxDecimalPlaces: 2
    })
    public price: number;
}
*/
export default class CreateProductCommand {
    public releaseDate: string;
    public productName: string;
    public description: string;
    public imageUrl: string;
    public price: number;
}
