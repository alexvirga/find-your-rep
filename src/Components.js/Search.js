import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  ClearRefinements,
  RefinementList,
  Configure
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import '../App.css';
import HitsContainer from './HitsContainer'

const searchClient = algoliasearch("8QLGK86FLK", "fb5caf445d027bff2fe756ea3e045581") 


class Search extends Component {
  render() {
    return (
      <div>


        <div className="container">
          <InstantSearch searchClient={searchClient} indexName="Reps">
          <div className="left-panel">
          <h2>State</h2>
            <ClearRefinements className="refinement-clear" />
            <RefinementList attribute="state" limit={50} />
            <Configure hitsPerPage={8} />
          </div>
            <div className="search-panel">
              <div className="search-panel__results">
                <SearchBox
                  className="searchbox"
                  translations={{
                    placeholder: '',
                  }}
                />
                <Hits hitComponent={HitsContainer} />

                <div className="pagination">
                  <Pagination />
                </div>
              </div>
            </div>
          </InstantSearch>
        </div>
      </div>
    );
  }
}




Hits.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default Search;
