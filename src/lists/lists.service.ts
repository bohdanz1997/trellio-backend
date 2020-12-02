import { Injectable } from '@nestjs/common'
import { CreateListDto } from './dto/create-list.dto'
import { UpdateListDto } from './dto/update-list.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { List } from './entities/list.entity'

@Injectable()
export class ListsService {
  constructor(
    @InjectRepository(List)
    private lists: Repository<List>,
  ) {}

  create(createListDto: CreateListDto) {
    return this.lists.save(createListDto)
  }

  findAll() {
    return this.lists.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} list`
  }

  update(id: number, updateListDto: UpdateListDto) {
    return this.lists.save({
      ...updateListDto,
      id,
    })
  }

  async remove(id: number) {
    await this.lists.delete(id)
    return id
  }
}
