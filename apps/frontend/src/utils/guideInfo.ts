import { GuideModelWithRelations } from 'shared-types';

export function getCompletedSteps(data: GuideModelWithRelations): number {
    return data.steps.reduce((acc, curr) => {
        if (curr.status === 'DONE') {
            acc += 1;
        }
        return acc;
    }, 0);
}

export function getStepsCount(data: GuideModelWithRelations): number {
    const involvedSteps = data.steps.filter(
        (step) => step.status !== 'REJECTED',
    );

    return involvedSteps.length;
}

export function getQuestionsCount(data: GuideModelWithRelations) {
    return data.questions ? Object.keys(data.questions).length : 0;
}

export function getCurrentStep(data: GuideModelWithRelations) {
    const sortedSteps = data.steps.sort((a, b) => a.id - b.id);
    const currentStep = sortedSteps.find(
        (item) => item.status !== 'DONE' && item.status !== 'REJECTED',
    );
    return currentStep ? currentStep : null;
}
