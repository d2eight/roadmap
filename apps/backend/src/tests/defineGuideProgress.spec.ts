import { defineGuideProgressStatus } from '../utils';
import { GuideStepModelFetched } from 'shared-types';

type Status = GuideStepModelFetched['status'];

const steps = (...statuses: Status[]): GuideStepModelFetched[] =>
    statuses.map((status, i) => ({
        id: i,
        guideId: 'guide-1',
        title: `Step ${i}`,
        description: '',
        status,
    }));

describe('defineGuideProgressStatus', () => {
    it.each<[string, Status[], Status]>([
        ['all pending', ['PENDING', 'PENDING'], 'PENDING'],
        ['some in work', ['PENDING', 'INWORK'], 'INWORK'],
        ['some done', ['PENDING', 'DONE'], 'INWORK'],
        ['all done', ['DONE', 'DONE'], 'DONE'],
        ['done, rejected ignored', ['DONE', 'REJECTED'], 'DONE'],
        ['pending, rejected ignored', ['PENDING', 'REJECTED'], 'PENDING'],
        ['all rejected', ['REJECTED', 'REJECTED'], 'REJECTED'],
        ['no steps', [], 'PENDING'],
    ])('%s → %s', (_, statuses, expected) => {
        expect(defineGuideProgressStatus(steps(...statuses))).toBe(expected);
    });
});