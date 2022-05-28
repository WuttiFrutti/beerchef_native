
import { useStoreState } from './EasyHooks';
import { StateModel } from './../state';
import { State } from 'easy-peasy';
import { useEffect, useState } from 'react';
import { LoadingStatus } from '../types/LoadingStatus';

const useData = <Result extends any | LoadingStatus>(mapState: (state: State<StateModel>) => Result, thunk: () => Promise<Result>, loadOn: LoadingStatus = LoadingStatus.NOT_STARTED, equalityFn: ((prev: Result, next: Result) => boolean) | undefined = undefined) => {
    const data: Result = useStoreState(mapState, equalityFn)
    const [calling, setCalling] = useState(false)

    const check = async () => {
        setCalling(true)

        thunk().then(() => {
            setCalling(false)
        })
    }

    useEffect(() => {
        if (!calling && data === loadOn) {
            check()
        }
    })

    return data;
}

export default useData;