import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';

@Resolver(() => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

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

  @Mutation(() => LessonType)
  createLesson(
    @Args('name') name: string,
    @Args('startDate') startDate: string,
    @Args('endDate') endDate: string,
  ) {
    return this.lessonService.createLesson(name, startDate, endDate);
  }
}
