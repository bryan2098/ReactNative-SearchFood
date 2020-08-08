import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResult from '../hooks/useResult';
import ResultList from '../components/ResultList';


const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, result, errorMessage] = useResult();

    console.log(result);

    return (
        <View style={styles.background}>
            <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)}/>
            {errorMessage ?  <Text>{errorMessage}</Text> : null}
            <Text>We have found {result.length} results</Text>
            <ResultList title="Cost Effective"></ResultList>
            <ResultList title="Bit Pricier"></ResultList>
            <ResultList title="Big Spender"></ResultList>
        </View>
    )
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#fff"
    }
})

export default SearchScreen;