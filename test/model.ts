import { Entity } from 'typeorm'

@Entity()
export class Person {
  id: number
  name: string
}
