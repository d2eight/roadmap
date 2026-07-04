/*
  Warnings:

  - You are about to drop the `AiQuestion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AiQuestionABCD` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AiQuestionCheckbox` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AiQuestionRange` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AiQuestions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AiQuestion" DROP CONSTRAINT "AiQuestion_aiQuestionsId_fkey";

-- DropForeignKey
ALTER TABLE "AiQuestionABCD" DROP CONSTRAINT "AiQuestionABCD_aiQuestionsId_fkey";

-- DropForeignKey
ALTER TABLE "AiQuestionCheckbox" DROP CONSTRAINT "AiQuestionCheckbox_aiQuestionsId_fkey";

-- DropForeignKey
ALTER TABLE "AiQuestionRange" DROP CONSTRAINT "AiQuestionRange_aiQuestionsId_fkey";

-- DropForeignKey
ALTER TABLE "AiQuestions" DROP CONSTRAINT "AiQuestions_guideId_fkey";

-- AlterTable
ALTER TABLE "Guide" ADD COLUMN     "questions" JSONB;

-- DropTable
DROP TABLE "AiQuestion";

-- DropTable
DROP TABLE "AiQuestionABCD";

-- DropTable
DROP TABLE "AiQuestionCheckbox";

-- DropTable
DROP TABLE "AiQuestionRange";

-- DropTable
DROP TABLE "AiQuestions";

-- DropEnum
DROP TYPE "AiQuestionABCD_Answers";

-- DropEnum
DROP TYPE "AiQuestionCheckbox_Answers";
