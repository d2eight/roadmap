import { ZodIssue } from 'zod';

export class ApiError extends Error {
  statusCode: number;
  issues?: ZodIssue[];

  constructor(statusCode: number, message: string, issues?: ZodIssue[]) {
    super(message);
    this.statusCode = statusCode;
    if (issues) {
      this.issues = issues;
    }
  }
}
