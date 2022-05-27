
import useData from './DataHook';
import { useStoreActions } from './EasyHooks';
import BeerList from './../models/BeerList';
import { LoadingStatus } from '../types/LoadingStatus';

const useLists = () => {
    const getLists = useStoreActions(s => s.listState.getAll)
    const lists: Array<BeerList> | LoadingStatus = useData(s => s.listState.lists, getLists)

    return lists
}

export default useLists