/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { jsx, Button, Input } from 'theme-ui';
import { graphql } from 'gatsby';
import * as JsSearch from 'js-search';
import styles from './search.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const searchPage = ({ data }) => {
  const [search, setSearch] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
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

    dataToSearch.addIndex('rawBody'); // sets the index attribute for the data
    dataToSearch.addIndex(['frontmatter', 'title']); // sets the index attribute for the data
    dataToSearch.addIndex(['frontmatter', 'autor']); // sets the index attribute for the data
    dataToSearch.addIndex(['frontmatter', 'date']); // sets the index attribute for the data

    dataToSearch.addDocuments([...data.allMdx.nodes]); // adds the data to be searched

    setSearch(dataToSearch);
  };

  useEffect(() => {
    rebuildIndex();
  }, []);

  const searchData = (e) => {
    const queryResult = search.search(e.target.value);
    console.log('queryResult', queryResult);
    setSearchQuery(e.target.value);
    setSearchResults(queryResult);
  };

  return (
    <div sx={{ bg: 'muted' }}>
      <div sx={{ bg: 'primary', py: 6 }}>
        <div className={styles.searchHeader} sx={{ mx: 'auto', maxWidth: 'maxWidth' }}>
          <div className={styles.label} sx={{ color: 'text', fontSize: 3, my: 3 }}>
            你搜索了{searchQuery}
          </div>
          <div className={styles.searchWrapper}>
            <Input
              className={styles.input}
              id='Search'
              name='search'
              value={searchQuery}
              onChange={searchData}
              sx={{ bg: 'text', border: 'none', borderRadius: 0 }}
            />
            <Button className={styles.submitButton} sx={{ bg: '#000', width: '55px', height: '55px', borderRadius: 0 }}>
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </div>
        </div>
      </div>
      <div sx={{ mx: 'auto', maxWidth: 'maxWidth' }}>
        <div className={styles.resultsWrapper}>
          <div className={styles.results}>
            <div className={styles.result} />
          </div>
        </div>
        {JSON.stringify(searchResults, null, 4)}
      </div>
    </div>
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
