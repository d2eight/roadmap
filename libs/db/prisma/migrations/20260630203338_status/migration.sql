/*
  Warnings:

  - The values [OTHER] on the enum `AiQuestionABCD_Answers` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "AiQuestionABCD_Answers_new" AS ENUM ('A', 'B', 'C', 'D', 'CUSTOM');
ALTER TABLE "AiQuestionABCD" ALTER COLUMN "answer" TYPE "AiQuestionABCD_Answers_new" USING ("answer"::text::"AiQuestionABCD_Answers_new");
ALTER TYPE "AiQuestionABCD_Answers" RENAME TO "AiQuestionABCD_Answers_old";
ALTER TYPE "AiQuestionABCD_Answers_new" RENAME TO "AiQuestionABCD_Answers";
DROP TYPE "public"."AiQuestionABCD_Answers_old";
COMMIT;
