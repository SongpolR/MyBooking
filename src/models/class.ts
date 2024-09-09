import type { Moment } from 'moment'
import { Instructor } from './instructor'

// TODO: Map with possible values from API
const ACTIVITIES = [
  'yoga',
  'pilates',
  'massage',
  'boxing',
  'cycling',
  'dance',
  'hiit',
  'bootcamp',
  'gym_time',
  'zumba_dance',
  'martials_art',
  'meditation',
  'personal_training',
  'sports'
] as const
export type Activity = (typeof ACTIVITIES)[number]

// TODO: Map with possible values from API
const LEVELS = ['beginner', 'intermediate', 'advance', 'pro'] as const
export type Level = (typeof LEVELS)[number]

export class Class {
  readonly id: number
  readonly name: string
  readonly startAt: Moment | null
  readonly endAt: Moment | null
  readonly imageUrl: string
  readonly instructor: Instructor
  readonly location: string
  readonly activity: Activity
  readonly level: Level

  constructor(data: Class) {
    this.id = data.id
    this.name = data.name
    this.startAt = data.startAt ? data.startAt : null
    this.endAt = data.endAt ? data.endAt : null
    this.imageUrl = data.imageUrl
    this.instructor = new Instructor(data.instructor)
    this.location = data.location
    this.activity = data.activity
    this.level = data.level
  }

  get duration(): number | undefined {
    return this.endAt?.diff(this.startAt, 'minutes')
  }

  get startTime(): string | undefined {
    return this.startAt?.format('hh:mm A')
  }

  get startDate(): string | undefined {
    return this.startAt?.format('dddd MMM. DD')
  }
}
