/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { jsx, Input } from 'theme-ui';
// import { graphql } from 'gatsby';
import * as JsSearch from 'js-search';
import styles from './search.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import PostCard from '../components/PostCard/PostCard';

const SearchPage = ({ data }) => {
  // const [search, setSearch] = useState([]);
  // const [searchResults, setSearchResults] = useState([]);
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

    dataToSearch.addDocuments(data.allMdx.nodes); // adds the data to be searched

    // setSearch(dataToSearch);
  };

  useEffect(() => {
    rebuildIndex();
  }, []);

  const searchData = (e) => {
    // const queryResult = search.search(e.target.value);
    setSearchQuery(e.target.value);
    // setSearchResults(queryResult);
  };

  return (
    <>
      <div sx={{ bg: 'blue.primary', py: 6 }}>
        <div className={styles.searchHeader} sx={{ mx: 'auto', maxWidth: 'maxWidth', px: [2, 0] }}>
          <div className={styles.label} sx={{ color: 'white', fontSize: 3, my: 3 }}>
            你搜索了{searchQuery}
          </div>
          <div className={styles.searchWrapper}>
            <Input
              className={styles.input}
              id='Search'
              name='search'
              value={searchQuery}
              onChange={searchData}
              sx={{ bg: 'white', border: 'none', borderRadius: 0 }}
            />
            <div
              className={styles.submitButton}
              sx={{ bg: '#000', color: 'white', variant: 'buttons.iconNormal', height: 'auto' }}
            >
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
        </div>
      </div>
      <div sx={{ mx: 'auto', maxWidth: 'maxWidth', bg: 'blue.muted1' }}>
        <div className={styles.resultsWrapper}>
          <div className={styles.results}>
            <div className={styles.result} />
          </div>
        </div>
        <div sx={{ bg: 'blue.muted2', px: [2, 0] }}>
          {/* {searchResults?.length
            ? searchResults.map((item) => (
                <PostCard
                  sx={{ maxWidth: ['100%', '30.2%'], m: [2, '1.5%'] }}
                  key={item.id}
                  {...item.frontmatter}
                  path={`/${item.slug}`}
                />
              ))
            : null} */}
        </div>
      </div>
    </>
  );
};

// export const query = graphql`
//   {
//     allMdx {
//       nodes {
//         id
//         frontmatter {
//           title
//           date(locale: "YYYY-MM-DD")
//           image
//         }
//         slug
//         rawBody
//       }
//     }
//   }
// `;

export default SearchPage;
