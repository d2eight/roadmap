-- AlterEnum
ALTER TYPE "GuideProgressStatus" ADD VALUE 'REJECTED';

-- AlterTable
ALTER TABLE "Guide" ALTER COLUMN "externalAiQuestionsStatus" SET DEFAULT false;
