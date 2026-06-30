-- CreateEnum
CREATE TYPE "GuideStatus" AS ENUM ('INIT', 'QUESTIONS_GENERATION', 'QUESTIONS_GENERATED', 'GUIDE_GENERATION', 'GUIDE_GENERATED');

-- CreateEnum
CREATE TYPE "AiQuestionABCD_Answers" AS ENUM ('A', 'B', 'C', 'D', 'OTHER');

-- CreateEnum
CREATE TYPE "AiQuestionCheckbox_Answers" AS ENUM ('A', 'B', 'C', 'D', 'E', 'F');

-- CreateTable
CREATE TABLE "Guide" (
    "id" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "externalAiQuestionsStatus" BOOLEAN NOT NULL DEFAULT false,
    "stauts" "GuideStatus" NOT NULL DEFAULT 'INIT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Guide_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GuideStep" (
    "id" TEXT NOT NULL,
    "guideId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GuideStep_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AiQuestions" (
    "id" TEXT NOT NULL,
    "guideId" TEXT NOT NULL,

    CONSTRAINT "AiQuestions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AiQuestionABCD" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "aiQuestionsId" TEXT NOT NULL,
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    "C" TEXT NOT NULL,
    "D" TEXT NOT NULL,
    "answer" "AiQuestionABCD_Answers",
    "customAnswer" TEXT,

    CONSTRAINT "AiQuestionABCD_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AiQuestionRange" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "aiQuestionsId" TEXT NOT NULL,
    "start" INTEGER NOT NULL DEFAULT 0,
    "end" INTEGER NOT NULL DEFAULT 100,
    "answer" INTEGER,

    CONSTRAINT "AiQuestionRange_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AiQuestion" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "aiQuestionsId" TEXT NOT NULL,
    "answer" TEXT,

    CONSTRAINT "AiQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AiQuestionCheckbox" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "aiQuestionsId" TEXT NOT NULL,
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    "C" TEXT NOT NULL,
    "D" TEXT NOT NULL,
    "E" TEXT NOT NULL,
    "F" TEXT NOT NULL,
    "answer" "AiQuestionCheckbox_Answers"[],

    CONSTRAINT "AiQuestionCheckbox_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AiQuestions_guideId_key" ON "AiQuestions"("guideId");

-- CreateIndex
CREATE UNIQUE INDEX "AiQuestionABCD_aiQuestionsId_key" ON "AiQuestionABCD"("aiQuestionsId");

-- CreateIndex
CREATE UNIQUE INDEX "AiQuestionRange_aiQuestionsId_key" ON "AiQuestionRange"("aiQuestionsId");

-- CreateIndex
CREATE UNIQUE INDEX "AiQuestion_aiQuestionsId_key" ON "AiQuestion"("aiQuestionsId");

-- CreateIndex
CREATE UNIQUE INDEX "AiQuestionCheckbox_aiQuestionsId_key" ON "AiQuestionCheckbox"("aiQuestionsId");

-- AddForeignKey
ALTER TABLE "Guide" ADD CONSTRAINT "Guide_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuideStep" ADD CONSTRAINT "GuideStep_guideId_fkey" FOREIGN KEY ("guideId") REFERENCES "Guide"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AiQuestions" ADD CONSTRAINT "AiQuestions_guideId_fkey" FOREIGN KEY ("guideId") REFERENCES "Guide"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AiQuestionABCD" ADD CONSTRAINT "AiQuestionABCD_aiQuestionsId_fkey" FOREIGN KEY ("aiQuestionsId") REFERENCES "AiQuestions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AiQuestionRange" ADD CONSTRAINT "AiQuestionRange_aiQuestionsId_fkey" FOREIGN KEY ("aiQuestionsId") REFERENCES "AiQuestions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AiQuestion" ADD CONSTRAINT "AiQuestion_aiQuestionsId_fkey" FOREIGN KEY ("aiQuestionsId") REFERENCES "AiQuestions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AiQuestionCheckbox" ADD CONSTRAINT "AiQuestionCheckbox_aiQuestionsId_fkey" FOREIGN KEY ("aiQuestionsId") REFERENCES "AiQuestions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
