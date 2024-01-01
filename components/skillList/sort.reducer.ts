import { SortEnum } from '../sort/sort.props'
import {IProject} from "@/constants/projects";

export type SortActions = { type: SortEnum.name } | { type: SortEnum.finishedAt }

export interface SortReducerState {
    sort: SortEnum;
    projects: IProject[];
}

export const sortReducer = (state: SortReducerState, action: SortActions ) => {
    switch (action.type) {
        case SortEnum.name :
            return {
                sort: SortEnum.name,
                projects: state.projects.sort((a, b) => a.name > b.name ? -1 : 1)
            }
        case SortEnum.finishedAt:
            return {
                sort: SortEnum.finishedAt,
                projects: state.projects.sort((a, b) => a.finishedAt > b.finishedAt ? 1 : -1)
            }
        default:
            console.log('undefined sort type');
            throw new Error();
            // return state.projects;
    }
}