import { Card, List, Text } from "react-native-paper"
import useLists from '../../hooks/ListHooks';


const MyLists = () => {
    const lists = useLists()


    if (lists instanceof Array) {
        return lists.map(list => <List.Item key={list.key.toString()} title={list.name}
        description="Item description" />)
    } else {
        return <Text>Loading</Text>
    }
}

export default MyLists;