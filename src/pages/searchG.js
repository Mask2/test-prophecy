import React, { useState, useEffect } from 'react';
import { useFlexSearch } from 'react-use-flexsearch';
import { graphql } from 'gatsby';
import { Formik, Form, Field } from 'formik';

// const index = /* a FlexSearch index */
// const store = {
//   1: { id: 1, title: 'Document 1' },
//   2: { id: 2, title: 'Document 2' },
//   3: { id: 3, title: 'Document 3' },
// }

export const pageQuery = graphql`
  {
    localSearchPages {
      store
      index
    }
  }
`;

const searchG = ({ data }) => {
  const [query, setQuery] = useState(null);
  const results = useFlexSearch(query, data.localSearchPages.index, data.localSearchPages.store);
  useEffect(() => {
    console.log('results:', results);
  }, [results]);
  return (
    <div>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, { setSubmitting }) => {
          console.log('Formik:', values);
          setQuery(values.query);
          setSubmitting(false);
        }}
      >
        <Form>
          <Field name='query' />
        </Form>
      </Formik>
      <h1>Results</h1>
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default searchG;
