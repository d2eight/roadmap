'use client'

import { UpdateProgressButton } from './UpdateProgressButton';
import { useGuideContext } from '../../context/GuideContext';
import { MobileGuidePageFooterWrapper } from './MobileGuidePageFooterWrapper';
import { AnswerQuestionsButton } from './AnswerQuestionsButton';

export function GuidePageFooter() {
    const { status, parsedQuestions } = useGuideContext();

    switch (status) {
        case 'GUIDE_GENERATED':
            return (
                <MobileGuidePageFooterWrapper>
                    <UpdateProgressButton className="w-full h-12.5">
                        Update
                    </UpdateProgressButton>
                </MobileGuidePageFooterWrapper>
            );
        case 'QUESTIONS_GENERATED': {
            if (!parsedQuestions.success) {
                return null;
            }

            return (
                <>
                    <MobileGuidePageFooterWrapper>
                        <AnswerQuestionsButton
                            className="w-full h-12.5"
                            variant="default"
                        >
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
}
