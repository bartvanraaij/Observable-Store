import { Observable } from 'rxjs';
export interface ObservableStoreSettings {
    trackStateHistory?: boolean;
    logStateChanges?: boolean;
    includeStateChangesOnSubscribe?: boolean;
    includeActionOnSubscribe?: boolean;
    stateSliceSelector?: (state: any) => any;
}
export interface CurrentStoreState {
    state: any;
    stateChanges: any;
}
/**
 * Executes a function on `state` and returns a version of T
 * @param state - the original state model
 */
export declare type stateFunc<T> = (state: T) => Partial<T>;
export declare class ObservableStore<T> {
    stateChanged: Observable<any>;
    stateHistory: any[];
    globalStateChanged: Observable<any>;
    private _stateDispatcher;
    private _clonerService;
    private _settings;
    constructor(settings: ObservableStoreSettings);
    protected setState(state: Partial<T> | stateFunc<T>, action?: string, dispatchState?: boolean): T;
    protected getState(): T;
    protected logStateAction(state: any, action: string): void;
    private _updateState;
    private _getStateOrSlice;
    private _dispatchState;
}
