const ENDPOINT = 'https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=';

export const fetchPickUpLocations = searchTerm => {
    return fetch(`${ENDPOINT}${searchTerm}`).then(response => response.json());
}
