import { z } from 'zod';

export class ApiError extends Error {
    statusCode: number;
    issues?: z.core.$ZodIssue[];

    constructor(
        statusCode: number,
        message: string,
        issues?: z.core.$ZodIssue[],
    ) {
        super(message);
        this.statusCode = statusCode;
        if (issues) {
            this.issues = issues;
        }
    }
}
