import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ResulDetail from './ResultDetail';

const ResultList =  ({title, result}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                data={result}
                keyExtractor={res => res.id}
                renderItem={({item}) => {
                    return <ResulDetail result={item}/>; 
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

export default ResultList;