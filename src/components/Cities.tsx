'use client';

import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { Country, State, City } from 'country-state-city';

type option = {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
  };
  label: string;
} | null;

type cityOption = {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
    countryCode: string;
    name: string;
    stateCode: string;
  };
  label: string;
} | null;

const Cities = () => {
  const [selectedCountry, setSelectedCountry] = useState<option>(null);
  const [selectedCity, setSelectedCity] = useState<cityOption>(null);

  const options = Country.getAllCountries().map((country) => ({
    value: {
      latitude: country.latitude,
      longitude: country.longitude,
      isoCode: country.isoCode,
    },
    label: country.name,
  }));

  const handleSelectedCountry = (option: option) => {
    setSelectedCountry(option);
    setSelectedCity(null);
  };

  const handleSelectedCity = (option: cityOption) => {
    setSelectedCity(option);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-white">
          <label htmlFor="country">Country</label>
        </div>
        <Select
          options={options}
          className="mb-3"
          value={selectedCountry}
          onChange={(value) => {
            handleSelectedCountry(value);
          }}
        />
      </div>
      {selectedCountry && (
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-white">
            <label htmlFor="country">City</label>
          </div>
          <Select
            value={selectedCity}
            onChange={handleSelectedCity}
            options={City.getCitiesOfCountry(
              selectedCountry?.value.isoCode
            )?.map((state) => ({
              value: {
                latitude: state.latitude,
                longitude: state.longitude,
                countryCode: state.countryCode,
                name: state.name,
                stateCode: state.stateCode,
              },
              label: state.name,
            }))}
          />
        </div>
      )}
    </div>
  );
};

export default Cities;
