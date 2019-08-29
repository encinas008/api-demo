import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { ArticleService } from './article.service';
import { articleProviders } from './article.providers';
import { ArticleController } from './article.controller';
@Module({
  imports: [DatabaseModule],
  controllers: [ArticleController],
  providers: [ArticleService, ...articleProviders]
})
export class ArticlesModule { }
