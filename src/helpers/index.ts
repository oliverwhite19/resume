import { parseISO } from 'date-fns';
import { Education, Position } from '../../prisma/generated/client2';
import { EmploymentWithPositions } from '../types';

export const toPosition = (position): Position => {
    return {
        ...position,
        start: position.start ? parseISO(position.start) : null,
        end: position.end ? parseISO(position.end) : null,
    };
};

export const toJob = (employment: any): EmploymentWithPositions => {
    return {
        ...employment,
        positions: employment.positions.map((position) => toPosition(position)),
    };
};

export const toEducation = (educations: any): Array<Education> => {
    return educations.map((edu) => ({
        ...edu,
        end: parseISO(edu.end),
    }));
};
