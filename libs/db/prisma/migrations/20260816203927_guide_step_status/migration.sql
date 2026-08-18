/*
  Warnings:

  - The `status` column on the `GuideStep` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "GuideStepStatus" AS ENUM ('PENDING', 'INWORK', 'DONE', 'REJECTED');

-- AlterTable
ALTER TABLE "GuideStep" DROP COLUMN "status",
ADD COLUMN     "status" "GuideStepStatus" NOT NULL DEFAULT 'PENDING';

-- DropEnum
DROP TYPE "GuidStepStatus";
