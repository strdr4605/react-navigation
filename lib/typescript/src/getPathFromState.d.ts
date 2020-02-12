import { NavigationState, PartialState } from '@react-navigation/routers';
declare type State = NavigationState | Omit<PartialState<NavigationState>, 'stale'>;
declare type StringifyConfig = Record<string, (value: any) => string>;
declare type Options = {
    [routeName: string]: string | {
        path?: string;
        stringify?: StringifyConfig;
        screens?: Options;
    };
};
/**
 * Utility to serialize a navigation state object to a path string.
 *
 * Example:
 * ```js
 * getPathFromState(
 *   {
 *     routes: [
 *       {
 *         name: 'Chat',
 *         params: { author: 'Jane', id: 42 },
 *       },
 *     ],
 *   },
 *   {
 *     Chat: {
 *       path: 'chat/:author/:id',
 *       stringify: { author: author => author.toLowerCase() }
 *     }
 *   }
 * )
 * ```
 *
 * @param state Navigation state to serialize.
 * @param options Extra options to fine-tune how to serialize the path.
 * @returns Path representing the state, e.g. /foo/bar?count=42.
 */
export default function getPathFromState(state?: State, options?: Options): string;
export {};
