/*
  Warnings:

  - You are about to drop the column `generateAiQuestions` on the `Guide` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Guide" DROP COLUMN "generateAiQuestions",
ADD COLUMN     "externalAiQuestionsStatus" BOOLEAN NOT NULL DEFAULT false;
