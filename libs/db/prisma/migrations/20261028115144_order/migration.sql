-- CreateIndex
CREATE INDEX "Guide_userId_progressStatus_idx" ON "Guide"("userId", "progressStatus");

-- CreateIndex
CREATE INDEX "Guide_userId_createdAt_idx" ON "Guide"("userId", "createdAt" DESC);

-- CreateIndex
CREATE INDEX "GuideStep_guideId_idx" ON "GuideStep"("guideId");
