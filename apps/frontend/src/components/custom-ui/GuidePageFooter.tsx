import { UpdateProgressButton } from '@/components/custom-ui/UpdateProgressButton';
import { useContext } from 'react';
import { GuideContext } from '@/context/GuideContext';
import { MobileGuidePageFooterWrapper } from '@/components/custom-ui/MobileGuidePageFooterWrapper';
import { AnswerQuestionsButton } from '@/components/custom-ui/AnswerQuestionsButton';

export function GuidePageFooter() {
  const { status } = useContext(GuideContext);

  switch (status) {
    case 'GUIDE_GENERATED':
      return (
        <MobileGuidePageFooterWrapper>
          <UpdateProgressButton className="w-full h-12.5">
            Update
          </UpdateProgressButton>
        </MobileGuidePageFooterWrapper>
      );
    case 'QUESTIONS_GENERATED':
      return (
        <>
          <MobileGuidePageFooterWrapper>
            <AnswerQuestionsButton className="w-full h-12.5" variant="default">
              Accept
            </AnswerQuestionsButton>
          </MobileGuidePageFooterWrapper>
          <AnswerQuestionsButton
            className="mt-5 w-full hidden xl:flex"
            variant="default"
          >
            Accept
          </AnswerQuestionsButton>
        </>
      );
  }
}
