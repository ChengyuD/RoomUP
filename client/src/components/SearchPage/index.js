import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_TECH } from '../../utils/queries';
import { CREATE_MATCHUP } from '../../utils/mutations';
import Button from '@material-ui/core/Button';
import './SearchResults.css';
import SearchIcon from "@material-ui/icons/Search";
import SearchResult from "../SearchResults";

function SearchPage({city, type}) {
  return (
      <div className='searchPage'>
          <div className='searchPage__info'>
              <p>7 Properties · Irvine · Rental Properties</p>
              <h1>Rental Locations in Irvine</h1>
              <Button variant="outlined">Meet the Owners</Button>
              <Button variant="outlined">Type of Rental</Button>
              <Button variant="outlined">Price</Button>
              <Button variant="outlined">Bedrooms and Bathrooms</Button>
              <Button variant="outlined">More filters</Button>
          </div>
          <SearchResult
              img="https://photos.zillowstatic.com/fp/3dae93b23ee891d7b2cfe49564c17e12-cc_ft_768.jpg"
              location="Irvine"
              title="27 Silver Cres, Irvine, CA 92603"
              description="4 bedroom · 2 bbthrooms · 2,175 sqft · Kitchen · Central AC"
              pets= 'true'
              price="5,250 a month"
              total="5,250"
          />

          <SearchResult
              img="https://photos.zillowstatic.com/fp/70b8d1600f4faf5d81db5f5cc7344b2a-cc_ft_768.webp"
              location="Irvine"
              title="130 Nature Walk, Irvine, CA 92618"
              description="3 bedroom · 3 bthrooms · Heating: Forced Air"
              pets= 'true'
              price="$3,400 a month"
              total="$3,400 total"
          />

          <SearchResult
              img="https://photos.zillowstatic.com/fp/340b9088d19ce40f438715eb84a01e16-cc_ft_768.jpg"
              location="Irvine"
              title="50 Eastshore St, Irvine, CA 92604"
              description="2 bedroom · 2 bathrooms · Free parking · Washing Machine"
              pets= 'true'
              price="$2,856 / month"
              total="$2,856 total"
          />
          <SearchResult
              img="https://photos.zillowstatic.com/fp/ebc2e34eb99d90ada8c0cb16d5b89d84-cc_ft_768.jpg"
              location="Irvine"
              title="1 San Leon, Irvine, CA 92606"
              description="1 bedroom · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
              pets= 'true'
              price="$2,300 / night"
              total="$2,300 total"
          />
          <SearchResult
              img="https://photos.zillowstatic.com/fp/d78cca7c29d180bf5546921b126a540e-cc_ft_768.jpg"
              location="Irvine"
              title="20 Pergola, Irvine, CA 92612"
              description="3 bedroom · 2 shared bthrooms · Central AC · Outdoor: Playground, trail"
              pets= 'true'
              price="$2,409 / night"
              total="$2,409 total"
          />
          <SearchResult
              img="https://photos.zillowstatic.com/fp/5034ad007b6e2e128c44bf04db269382-cc_ft_768.jpg"
              location="Irvine"
              title="1300 Hayes, Irvine, CA 92620"
              description="1 bedroom · 1.5 shared bthrooms · Building: 604 units · Cooling: Central · Laundry: Shared laundry · Outdoor: Playground, trail"
              pets= 'true'
              price="$2300 /month"
              total="$2300 total"
          />
          <SearchResult
              img="https://photos.zillowstatic.com/fp/15944df77fc75098809a0cb82c858e87-cc_ft_768.jpg"
              location="Irvine"
              title="100 Grand Canal, Irvine, CA 92620"
              description="3 bedroom · 2 bthrooms · Building: 604 units · Cooling: Central · Laundry: Shared laundry · Outdoor: Playground, trail"
              pets= 'true'
              price="$2,200 /month"
              total="$2,200 total"
          />
      </div>
  )
}

export default SearchPage
