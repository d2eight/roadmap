-- CreateEnum
CREATE TYPE "GuideProgressStatus" AS ENUM ('PENDING', 'INWORK', 'DONE');

-- AlterTable
ALTER TABLE "Guide" ADD COLUMN     "progressStatus" "GuideProgressStatus" NOT NULL DEFAULT 'PENDING';
