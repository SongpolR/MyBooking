import { Class } from './class'

export class Instructor {
  readonly id: number
  readonly name: string
  readonly imageUrl: string
  readonly classes: Class[]

  constructor(data: any) {
    this.id = data.id
    this.name = data.name
    this.imageUrl = data.imageUrl
    this.classes = data.classes ? data.classes.map((c: any) => new Class(c)) : []
  }
}
