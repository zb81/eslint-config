import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Person {
  @PrimaryColumn()
  id: number

  @Column({ length: 10 })
  name: string
}

if (true) {
  console.log(123)
}
else {
  console.log(123)
}
