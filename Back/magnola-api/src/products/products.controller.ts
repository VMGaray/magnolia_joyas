import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiQuery } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { FilterProductsDto } from './dto/filter-products.dto';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo producto' })
  @ApiResponse({ status: 201, description: 'Producto creado exitosamente' })
  @ApiResponse({ status: 404, description: 'Categoría, tipo o subtipo no encontrado' })
  @ApiResponse({ status: 409, description: 'El producto ya existe' })
  @ApiBody({ type: CreateProductDto })
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los productos con filtros opcionales' })
  @ApiResponse({ status: 200, description: 'Lista de productos obtenida exitosamente' })
  @ApiQuery({ name: 'category', required: false, description: 'Filtrar por categoría', example: 'Plata 925' })
  @ApiQuery({ name: 'type', required: false, description: 'Filtrar por tipo de producto', example: 'Anillos' })
  @ApiQuery({ name: 'subtype', required: false, description: 'Filtrar por subtipo', example: 'Piedras naturales' })
  findAll(@Query() filters: FilterProductsDto) {
    return this.productsService.findAll(filters);
  }

  @Get('categories')
  @ApiOperation({ summary: 'Obtener todas las categorías' })
  @ApiResponse({ status: 200, description: 'Lista de categorías obtenida exitosamente' })
  getCategories() {
    return this.productsService.getCategories();
  }

  @Get('product-types')
  @ApiOperation({ summary: 'Obtener todos los tipos de productos con sus categorías' })
  @ApiResponse({ status: 200, description: 'Lista de tipos de productos obtenida exitosamente' })
  getProductTypes() {
    return this.productsService.getProductTypes();
  }

  @Get('subtypes')
  @ApiOperation({ summary: 'Obtener todos los subtipos con sus relaciones' })
  @ApiResponse({ status: 200, description: 'Lista de subtipos obtenida exitosamente' })
  getSubtypes() {
    return this.productsService.getSubtypes();
  }

  @Post('seed')
  @ApiOperation({ summary: 'Poblar la base de datos con clasificaciones (categorías, tipos, subtipos)' })
  @ApiResponse({ status: 201, description: 'Clasificaciones creadas exitosamente' })
  seed() {
    return this.productsService.seed();
  }

  @Post('seed-products')
  @ApiOperation({ summary: 'Poblar la base de datos con 10 productos de ejemplo' })
  @ApiResponse({ status: 201, description: 'Productos de ejemplo creados exitosamente' })
  @ApiResponse({ status: 404, description: 'Debes ejecutar el seed principal primero' })
  seedProducts() {
    return this.productsService.seedProducts();
  }
}
