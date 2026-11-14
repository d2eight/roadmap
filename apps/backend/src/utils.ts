import { GuideStepModelFetched } from 'shared-types';
import { GuideProgressStatus } from 'database/enums';

export function defineGuideProgressStatus(
    steps: GuideStepModelFetched[],
): GuideProgressStatus {
    if(isEmpty(steps)) {
        return 'PENDING'
    }

    if (isGuideRejected(steps)) {
        return 'REJECTED';
    }

    if (isGuideDone(steps)) {
        return 'DONE';
    }

    if (isGuideInWork(steps)) {
        return 'INWORK';
    }

    return 'PENDING';
}

const isGuideDone = (steps: GuideStepModelFetched[]): boolean => {
    const stepsWithoutRejected = steps.filter(
        (step) => step.status !== 'REJECTED',
    );
    return stepsWithoutRejected.every((step) => step.status === 'DONE');
};

const isGuideInWork = (steps: GuideStepModelFetched[]): boolean => {
    return steps.some(
        (step) => step.status === 'DONE' || step.status === 'INWORK',
    );
};

const isGuideRejected = (steps: GuideStepModelFetched[]): boolean => {
    return steps.every((step) => step.status === 'REJECTED');
};

const isEmpty = (steps: GuideStepModelFetched[]): boolean => {
    return steps.length === 0;
};
