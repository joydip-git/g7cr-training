/*
import { IsString, IsNumber, IsOptional } from 'class-validator'
export default class UpdateProductCommand {
    @IsNumber({
        allowInfinity: false,
        allowNaN: false
    })
    public productId: number;

    @IsOptional()
    @IsString()
    public releaseDate: string;

    @IsOptional()
    @IsString()
    public productName: string;

    @IsOptional()
    @IsString()
    public description: string;

    @IsOptional()
    @IsString()
    public imageUrl: string;

    @IsOptional()
    @IsNumber({
        allowInfinity: false,
        allowNaN: false,
        maxDecimalPlaces: 2
    })
    public price: number;
}
*/
export default class UpdateProductCommand {
    public productId: number;
    public releaseDate: string;
    public productName: string;
    public description: string;
    public imageUrl: string;
    public price: number;
}