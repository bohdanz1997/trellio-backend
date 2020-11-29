import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CardsModule } from './cards/cards.module'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [CardsModule, TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
