import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class List {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string
}
