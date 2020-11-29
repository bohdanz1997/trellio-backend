import { Injectable } from '@nestjs/common'
import { CreateCardDto } from './dto/create-card.dto'
import { UpdateCardDto } from './dto/update-card.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Card } from './entities/card.entity'
import { Repository } from 'typeorm'

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(Card)
    private cards: Repository<Card>,
  ) {}

  async create(createCardDto: CreateCardDto) {
    return this.cards.save(createCardDto)
  }

  findAll() {
    return this.cards.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} card`
  }

  update(id: number, updateCardDto: UpdateCardDto) {
    return this.cards.update(id, updateCardDto)
  }

  async remove(id: number) {
    return this.cards.delete(id)
  }
}
