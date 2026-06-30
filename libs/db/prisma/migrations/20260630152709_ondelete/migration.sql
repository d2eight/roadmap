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

-- DropForeignKey
ALTER TABLE "Guide" DROP CONSTRAINT "Guide_userId_fkey";

-- DropForeignKey
ALTER TABLE "GuideStep" DROP CONSTRAINT "GuideStep_guideId_fkey";

-- AddForeignKey
ALTER TABLE "Guide" ADD CONSTRAINT "Guide_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuideStep" ADD CONSTRAINT "GuideStep_guideId_fkey" FOREIGN KEY ("guideId") REFERENCES "Guide"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AiQuestions" ADD CONSTRAINT "AiQuestions_guideId_fkey" FOREIGN KEY ("guideId") REFERENCES "Guide"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AiQuestionABCD" ADD CONSTRAINT "AiQuestionABCD_aiQuestionsId_fkey" FOREIGN KEY ("aiQuestionsId") REFERENCES "AiQuestions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AiQuestionRange" ADD CONSTRAINT "AiQuestionRange_aiQuestionsId_fkey" FOREIGN KEY ("aiQuestionsId") REFERENCES "AiQuestions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AiQuestion" ADD CONSTRAINT "AiQuestion_aiQuestionsId_fkey" FOREIGN KEY ("aiQuestionsId") REFERENCES "AiQuestions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AiQuestionCheckbox" ADD CONSTRAINT "AiQuestionCheckbox_aiQuestionsId_fkey" FOREIGN KEY ("aiQuestionsId") REFERENCES "AiQuestions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
