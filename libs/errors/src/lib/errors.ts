import { TaggedError } from 'better-result';

export class UnexpectedError extends TaggedError('UnexpectedError')<{
    message: string;
}> {}

export class UnauthorizedError extends TaggedError('UnauthorizedError')<{
    message: string;
}> {}

export class UnprocessableEntity<Z = null> extends TaggedError(
    'UnprocessableEntity',
)<{
    message: string;
    zodError?: Z;
}> {}

export class NotFoundError extends TaggedError('NotFoundError')<{
    message: string;
}> {}

export class TooManyRequestsError extends TaggedError('TooManyRequestsError')<{
    message: string;
}> {}
