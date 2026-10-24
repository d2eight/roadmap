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
  const involvedSteps = data.steps.filter((step) => step.status !== 'REJECTED');

  return involvedSteps.length;
}

export function getQuestionsCount(data: GuideModelWithRelations) {
  return data.questions ? Object.keys(data.questions).length : 0;
}
