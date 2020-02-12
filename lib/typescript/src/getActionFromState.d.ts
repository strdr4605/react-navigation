import { PartialState, NavigationState } from '@react-navigation/routers';
declare type NavigateParams = {
    screen?: string;
    params?: NavigateParams;
};
declare type Action = {
    type: 'NAVIGATE';
    payload: {
        name: string;
        params: NavigateParams;
    };
} | {
    type: 'RESET_ROOT';
    payload: PartialState<NavigationState>;
};
export default function getActionFromState(state: PartialState<NavigationState>): Action;
export {};
