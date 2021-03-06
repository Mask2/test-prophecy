import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import * as JsSearch from 'js-search';

const searchPage = ({ data }) => {
  const [search, setSearch] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const rebuildIndex = () => {
    const dataToSearch = new JsSearch.Search('id');
    /**
     *  defines a indexing strategy for the data
     * more about it in here https://github.com/bvaughn/js-search#configuring-the-index-strategy
     */
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy();
    /**
     * defines the sanitizer for the search
     * to prevent some of the words from being excluded
     *
     */
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer();
    /**
     * defines the search index
     * read more in here https://github.com/bvaughn/js-search#configuring-the-search-index
     */
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex('id');
    dataToSearch.addIndex('id'); // sets the index attribute for the data
    dataToSearch.addIndex('rawBody'); // sets the index attribute for the data
    dataToSearch.addDocuments(data.allMdx.nodes); // adds the data to be searched
    setSearch(dataToSearch);
  };

  useEffect(() => {
    rebuildIndex();
  }, []);

  const searchData = (e) => {
    const queryResult = search.search(e.target.value);
    setSearchQuery(e.target.value);
    setSearchResults(queryResult);
  };

  return (
    <>
      <input
        id='Search'
        value={searchQuery}
        onChange={searchData}
        placeholder='Enter your search here'
        style={{ margin: '0 auto', width: '400px', paddingTop: 400 }}
      />
      {JSON.stringify(searchResults, null, 4)}
    </>
  );
};

export const query = graphql`
  {
    allMdx {
      nodes {
        id
        frontmatter {
          title
          date
        }
        rawBody
      }
    }
  }
`;

export default searchPage;
