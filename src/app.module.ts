import { Module } from '@nestjs/common';
import { ArticlesModule } from './modules/articles/articles.module';

@Module({
  imports: [ArticlesModule]
})
export class AppModule {}
