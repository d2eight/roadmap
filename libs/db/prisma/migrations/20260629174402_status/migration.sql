/*
  Warnings:

  - You are about to drop the column `stauts` on the `Guide` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Guide" DROP COLUMN "stauts",
ADD COLUMN     "status" "GuideStatus" NOT NULL DEFAULT 'INIT';
