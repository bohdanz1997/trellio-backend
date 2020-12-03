import { Test, TestingModule } from '@nestjs/testing'
import { CardsService } from './cards.service'
import { MockType } from '../../test/types'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Card } from './entities/card.entity'

const cardRepoMockFactory: () => MockType<unknown> = jest.fn(() => ({
  findOne: jest.fn((entity) => entity),
}))

describe('CardsService', () => {
  let service: CardsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CardsService,
        { provide: getRepositoryToken(Card), useFactory: cardRepoMockFactory },
      ],
    }).compile()

    service = module.get<CardsService>(CardsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
