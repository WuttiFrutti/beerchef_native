
import useData from './DataHook';
import { useStoreActions } from './EasyHooks';


const useUser = () => {
    const validate = useStoreActions(s => s.userState.validate)
    const user = useData(s => s.userState.user, validate)

    return user
}

export default useUser