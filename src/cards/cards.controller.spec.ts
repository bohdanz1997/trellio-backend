import { Test, TestingModule } from '@nestjs/testing'
import { CardsController } from './cards.controller'
import { CardsService } from './cards.service'
import { MockType } from '../../test/types'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Card } from './entities/card.entity'

const cardRepoMockFactory: () => MockType<unknown> = jest.fn(() => ({
  findOne: jest.fn((entity) => entity),
}))

describe('CardsController', () => {
  let controller: CardsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardsController],
      providers: [
        CardsService,
        { provide: getRepositoryToken(Card), useFactory: cardRepoMockFactory },
      ],
    }).compile()

    controller = module.get<CardsController>(CardsController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
