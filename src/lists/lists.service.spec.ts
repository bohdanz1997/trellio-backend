import { Test, TestingModule } from '@nestjs/testing'
import { ListsService } from './lists.service'
import { MockType } from '../../test/types'
import { getRepositoryToken } from '@nestjs/typeorm'
import { List } from './entities/list.entity'

const listRepoMockFactory: () => MockType<unknown> = jest.fn(() => ({
  findOne: jest.fn((entity) => entity),
}))

describe('ListsService', () => {
  let service: ListsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ListsService,
        { provide: getRepositoryToken(List), useFactory: listRepoMockFactory },
      ],
    }).compile()

    service = module.get<ListsService>(ListsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
