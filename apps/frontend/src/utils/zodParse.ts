import {
    aiQuestionsSchema,
    answeredQuestionsSchema,
} from 'shared-types';
import { JsonValue } from '@prisma/client/runtime/client';

export function parseQuestions(questions: JsonValue) {
    return aiQuestionsSchema.safeParse(questions);
}

export function parseAnswers(answers: JsonValue) {
    return answeredQuestionsSchema.safeParse(answers);
}
