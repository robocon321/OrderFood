import React from 'react';
import { View, FlatList} from 'react-native';
import Category from './Category';

export default Categories = (props) => {
    const {setSelected, isActive} = props;
    return (
        <View>
            <FlatList 
                data={props.categoryData}
                renderItem={({item, index}) =>{
                    return <Category item={item} setSelected={setSelected} isActive={isActive}/>
                }}
                keyExtractor={(item) => `${item.id}`}
                horizontal = {true}
            />
        </View>
    )
}


