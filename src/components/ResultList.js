import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import ResulDetail from './ResultDetail';

const ResultList =  ({title, result, navigation}) => {

    if(!result.length) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                data={result}
                keyExtractor={res => res.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultShow', {id: item.id})}>
                            <ResulDetail result={item}/>
                        </TouchableOpacity>
                    ); 
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 5
    }
});

export default withNavigation(ResultList);