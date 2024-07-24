import { Resolver, Query } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver(() => LessonType)
export class LessonResolver {
  @Query(() => LessonType)
  lesson() {
    return {
      id: '1',
      name: 'Physics Class',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    };
  }
}
