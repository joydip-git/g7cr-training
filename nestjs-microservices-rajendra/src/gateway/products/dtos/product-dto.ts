import { ApiProperty } from "@nestjs/swagger";
export class ProductDto {
    @ApiProperty({ required: true })
    public productId: number;
    @ApiProperty({ required: true })
    public likes: number;
    @ApiProperty({ required: true })
    public releaseDate: string;
    @ApiProperty({ required: true })
    public productName: string;
    @ApiProperty({ required: true })
    public description: string;
    @ApiProperty({ required: true })
    public imageUrl: string;
    @ApiProperty({ required: true })
    public price: number;
}