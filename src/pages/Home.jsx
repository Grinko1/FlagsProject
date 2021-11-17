import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ALL_COUNTRIES } from '../config';
import List from '../components/List';
import Card from '../components/Card';
import Controls from '../components/Controls';
import { useHistory } from 'react-router';

const Home = ({ countries, setCountries }) => {
  const [filteredCounries, setFilteredCounries] = useState(countries);
  const { push } = useHistory();

  const handlerSearch = (search, region) => {
    let data = [...countries];
    if (region) {
      data = data.filter((c) => c.region.includes(region));
    }
    if (search) {
      data = data.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()));
    }
    setFilteredCounries(data);
  };

  useEffect(() => {
    if (!countries.length) axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, [countries.length, setCountries]);

  useEffect(() => {
    handlerSearch();
  }, [countries]);

  return (
    <>
      <Controls onSearch={handlerSearch} />
      <List>
        {filteredCounries.map((c) => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name,
            info: [
              {
                title: 'Population',
                description: c.population.toLocaleString(),
              },
              {
                title: 'Region',
                description: c.region,
              },
              {
                title: 'Capital',
                description: c.capital,
              },
            ],
          };
          return <Card key={c.name} {...countryInfo} onClick={() => push(`/country/${c.name}`)} />;
        })}
      </List>
    </>
  );
};

export default Home;
