import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  listId: number
}
