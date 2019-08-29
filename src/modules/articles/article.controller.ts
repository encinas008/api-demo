import { Controller, Body, Post, Get, Param, Put, Delete } from '@nestjs/common';
import { ArticleDto } from './dto/article.dto';
import { ArticleService } from './article.service';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) { }

  @Post()
  async create(@Body() articleDto: ArticleDto) {
    return this.articleService.create(articleDto);
  }

  @Get()
  async getAll() {
    return this.articleService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.articleService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() articleDto: ArticleDto) {
    return this.articleService.update(id, articleDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.articleService.delete(id);
  }
}