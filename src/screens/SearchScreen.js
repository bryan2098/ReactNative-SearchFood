import React, { useState } from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResult from '../hooks/useResult';
import ResultList from '../components/ResultList';


const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, result, errorMessage] = useResult();

    const filterResultByPrice = (price) => {
        return result.filter(res => res.price === price);
    }

    return (
        <>
            <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)}/>
            {errorMessage ?  <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultList result={filterResultByPrice('$')} title="Cost Effective"></ResultList>
                <ResultList result={filterResultByPrice('$$')} title="Bit Pricier"></ResultList>
                <ResultList result={filterResultByPrice('$$$')} title="Big Spender"></ResultList>
            </ScrollView>
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1
    }
})

export default SearchScreen;