import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_TECH } from '../../utils/queries';
import { CREATE_Listings } from '../../utils/mutations';
import Button from '@material-ui/core/Button';
import './SearchResults.css';
import SearchIcon from "@material-ui/icons/Search";
import SearchResult from "../SearchResults";

function SearchPage() {
  return (
      <div className='searchPage'>
          <div className='searchPage__info'>
              <p>7 Properties · Irvine · Rental Properties</p>
              <h1>Rental citys in Irvine</h1>
              <Button variant="outlined">Meet the Owners</Button>
              <Button variant="outlined">Type of Rental</Button>
              <Button variant="outlined">Price</Button>
              <Button variant="outlined">Bedrooms and Bathrooms</Button>
              <Button variant="outlined">More filters</Button>
          </div>
          <SearchResult
              img=""
              city="Irvine"
              address="27 Silver Cres, Irvine, CA 92603"
              type="house"
              description="4 bedroom · 2 bbthrooms · 2,175 sqft · Kitchen · Central AC"
              pets= 'true'
              price="5,250 / month"
          />

          <SearchResult
              img=""
              city="Irvine"
              address="130 Nature Walk, Irvine, CA 92618"
              type="condo"
              description="3 bedroom · 3 bthrooms · Heating: Forced Air"
              pets= 'true'
              price="$3,400 / month"
          />

          <SearchResult
              img=""
              city="Irvine"
              address="50 Eastshore St, Irvine, CA 92604"
              type="Apartment"
              description="2 bedroom · 2 bathrooms · Free parking · Washing Machine"
              pets= 'true'
              price="$2,856 / month"
          />
          <SearchResult
              img=""
              city="Irvine"
              address="1 San Leon, Irvine, CA 92606"
              type="apartment"
              description="1 bedroom · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
              pets= 'true'
              price="$2,300 / month"
          />
          <SearchResult
              img=""
              city="Irvine"
              address="20 Pergola, Irvine, CA 92612"
              type="apartment"
              description="3 bedroom · 2 shared bthrooms · Central AC · Outdoor: Playground, trail"
              pets= 'true'
              price="$2,409 / month"
          />
          <SearchResult
              img=""
              city="Irvine"
              address="1300 Hayes, Irvine, CA 92620"
              type="Apartment"
              description="1 bedroom · 1.5 shared bthrooms · Building: 604 units · Cooling: Central · Laundry: Shared laundry · Outdoor: Playground, trail"
              pets= 'true'
              price="$2300 /month"
          />
          <SearchResult
              img=""
              city="Irvine"
              address="5 Star Luxury Apartment"
              type="Apartment"
              description="3 bedroom · 2 bthrooms · Building: 604 units · Cooling: Central · Laundry: Shared laundry · Outdoor: Playground, trail"
              pets= 'true'
              price="$2,200 /month"
          />
      </div>
  )
}

export default SearchPage
