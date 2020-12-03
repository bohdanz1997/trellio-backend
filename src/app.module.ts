import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CardsModule } from './cards/cards.module'
import { ListsModule } from './lists/lists.module'

@Module({
  imports: [TypeOrmModule.forRoot(), CardsModule, ListsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
