import { Test, TestingModule } from '@nestjs/testing'
import { ListsController } from './lists.controller'
import { ListsService } from './lists.service'
import { getRepositoryToken } from '@nestjs/typeorm'
import { List } from './entities/list.entity'
import { MockType } from '../../test/types'

const listRepoMockFactory: () => MockType<unknown> = jest.fn(() => ({
  findOne: jest.fn((entity) => entity),
}))

describe('ListsController', () => {
  let controller: ListsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListsController],
      providers: [
        ListsService,
        { provide: getRepositoryToken(List), useFactory: listRepoMockFactory },
      ],
    }).compile()

    controller = module.get<ListsController>(ListsController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
