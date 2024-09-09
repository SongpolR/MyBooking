<script setup>
import ProfileHeader from '@/components/ProfileHeader.vue'
import UpcomingBanner from '@/components/UpcomingBanner.vue'
import { Class } from '@/models/class'
import { Instructor } from '@/models/instructor'
import { useLiffStore } from '@/stores/liff'
import moment from 'moment'

const liffStore = useLiffStore()
liffStore.init()

const upcomingClasses = [
  new Class({
    id: 1001,
    name: 'Dummy Class 1',
    startAt: moment(),
    endAt: moment().add({ minutes: 50 }),
    imageUrl: 'https://picsum.photos/300',
    instructor: new Instructor({
      id: 2001,
      name: 'Dummy Instructor 1',
      imageUrl: 'https://picsum.photos/300'
    }),
    location: 'Dummy Location',
    activity: 'pilates',
    level: 'beginner'
  }),
  new Class({
    id: 1002,
    name: 'Dummy Class 2',
    startAt: moment(),
    endAt: moment().add({ minutes: 30 }),
    imageUrl: 'https://picsum.photos/300',
    instructor: new Instructor({
      id: 2001,
      name: 'Dummy Instructor 1',
      imageUrl: 'https://picsum.photos/300'
    }),
    location: 'Dummy Location',
    activity: 'pilates',
    level: 'intermediate'
  }),
  new Class({
    id: 1003,
    name: 'Dummy Class 3',
    startAt: moment(),
    endAt: moment().add({ minutes: 120 }),
    imageUrl: 'https://picsum.photos/300',
    instructor: new Instructor({
      id: 2002,
      name: 'Dummy Instructor 2',
      imageUrl: 'https://picsum.photos/300'
    }),
    location: 'Dummy Location',
    activity: 'pilates',
    level: 'advance'
  }),
  new Class({
    id: 1004,
    name: 'Dummy Class 4',
    startAt: moment(),
    endAt: moment().add({ minutes: 90 }),
    imageUrl: 'https://picsum.photos/300',
    instructor: new Instructor({
      id: 2002,
      name: 'Dummy Instructor 2',
      imageUrl: 'https://picsum.photos/300'
    }),
    location: 'Dummy Location',
    activity: 'pilates',
    level: 'advance'
  }),
  new Class({
    id: 1005,
    name: 'Dummy Class 5',
    startAt: moment(),
    endAt: moment().add({ minutes: 60 }),
    imageUrl: 'https://picsum.photos/300',
    instructor: new Instructor({
      id: 2002,
      name: 'Dummy Instructor 2',
      imageUrl: 'https://picsum.photos/300'
    }),
    location: 'Dummy Location',
    activity: 'pilates',
    level: 'pro'
  })
]
</script>

<template>
  <div class="flex flex-col">
    <ProfileHeader
      v-if="liffStore.profile"
      class="bg-purple-500 p-4 w-full"
      :displayName="liffStore.profile.displayName"
      :profileImageUrl="liffStore.profile.pictureUrl"
    />
    <div>
      <UpcomingBanner :classes="upcomingClasses" />
    </div>
  </div>
</template>
