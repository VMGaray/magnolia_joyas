import { ApiProperty } from '@nestjs/swagger';

export class FilterProductsDto {
  @ApiProperty({
    description: 'Filtrar por nombre de categoría',
    example: 'Plata 925',
    required: false,
  })
  category?: string;

  @ApiProperty({
    description: 'Filtrar por nombre de tipo de producto',
    example: 'Anillos',
    required: false,
  })
  type?: string;

  @ApiProperty({
    description: 'Filtrar por nombre de subtipo',
    example: 'Piedras naturales',
    required: false,
  })
  subtype?: string;
}
