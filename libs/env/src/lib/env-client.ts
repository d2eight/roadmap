import z from 'zod';

const environmentClientSchema = z.object({
    NEXT_URL: z.string(),
    BETTER_AUTH_URL: z.string(),
    EXPRESS_URL: z.string(),
});

type EnvironmentClientSchemaType = z.infer<typeof environmentClientSchema>;

function validateEnv(): EnvironmentClientSchemaType {
    const parsedEnv = environmentClientSchema.safeParse({
        NEXT_URL: process.env['NEXT_URL'],
        BETTER_AUTH_URL: process.env['BETTER_AUTH_URL'],
        EXPRESS_URL: process.env['EXPRESS_URL'],
    });

    if (!parsedEnv.success) {
        console.error(parsedEnv.error.message);
        throw new Error('Corrupted env.');
    }

    return parsedEnv.data;
}

export const clientEnv = validateEnv();
