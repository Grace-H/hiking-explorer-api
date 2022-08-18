import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Hike {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  hike: string

  @Column()
  city: string

  @Column()
  state: string

  @Column()
  done: boolean
  
  @Column()
  length: number
}
