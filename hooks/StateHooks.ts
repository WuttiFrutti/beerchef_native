import { createTypedHooks } from "easy-peasy";
import { StateModel } from "../state";


const typedHooks = createTypedHooks<StateModel>();

export const useStateActions = typedHooks.useStoreActions;
export const useStateDispatch = typedHooks.useStoreDispatch;
export const useStateState = typedHooks.useStoreState;