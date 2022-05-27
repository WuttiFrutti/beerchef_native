import { createTypedHooks } from 'easy-peasy';
import { StateModel } from '../state';

const typedHooks = createTypedHooks<StateModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;