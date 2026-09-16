'use server';

import { revalidatePath } from 'next/cache';

export async function serverRevalidatePath(path: string) {
  return revalidatePath(path);
}
