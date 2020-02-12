/// <reference types="react" />
import { Route, ParamListBase, NavigationState, PartialState } from '@react-navigation/routers';
import { NavigationProp, RouteConfig } from './types';
declare type Props<State extends NavigationState, ScreenOptions extends object> = {
    screen: RouteConfig<ParamListBase, string, ScreenOptions>;
    navigation: NavigationProp<ParamListBase, string, State, ScreenOptions>;
    route: Route<string> & {
        state?: NavigationState | PartialState<NavigationState>;
    };
    getState: () => State;
    setState: (state: State) => void;
};
/**
 * Component which takes care of rendering the screen for a route.
 * It provides all required contexts and applies optimizations when applicable.
 */
export default function SceneView<State extends NavigationState, ScreenOptions extends object>({ screen, route, navigation, getState, setState, }: Props<State, ScreenOptions>): JSX.Element;
export {};
