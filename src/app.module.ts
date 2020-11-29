import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CardsModule } from './cards/cards.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ListsModule } from './lists/lists.module'

@Module({
  imports: [CardsModule, TypeOrmModule.forRoot(), ListsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
