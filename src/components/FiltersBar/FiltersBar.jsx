import { BtnRst, StyledLabel, StyledSelect } from './FiltersBar.styled';
import { useEffect, useState } from 'react';
import { setFilter } from '../../redux/filtersSlice';
import { useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';
import optionsData from './optionsData.json';

export const FiltersBar = () => {
  const dispatch = useDispatch();

  const initialValues = {
    language: 'all',
    level: 'all',
    price: 'all',
  };

  const [filterValues, setFilterValues] = useState(initialValues);

  useEffect(() => {
    dispatch(setFilter(filterValues));
  }, [filterValues, dispatch]);

  const inputChange = (propertyName, e) => {
    setFilterValues(prevValues => ({
      ...prevValues,
      [propertyName]: e.target.value,
    }));
  };

  const handleLanguageChange = e => inputChange('language', e);
  const handleLevelChange = e => inputChange('level', e);
  const handlePriceChange = e => inputChange('price', e);

  const handleReset = () => setFilterValues(initialValues);

  return (
    <Formik initialValues={filterValues}>
      {() => (
        <Form>
          <StyledLabel>
            Languages
            <StyledSelect
              as="select"
              id="language"
              className="language"
              name="language"
              value={filterValues.language}
              onChange={handleLanguageChange}
            >
              <option value="all">All</option>
              {optionsData.languages.map(language => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </StyledSelect>
          </StyledLabel>

          <StyledLabel>
            Level of knowledge
            <StyledSelect
              as="select"
              id="level"
              className="level"
              name="level"
              value={filterValues.level}
              onChange={handleLevelChange}
            >
              <option value="all">All</option>
              {optionsData.levels.map(level => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </StyledSelect>
          </StyledLabel>

          <StyledLabel>
            Price
            <StyledSelect
              as="select"
              id="price"
              className="price"
              name="price"
              value={filterValues.price}
              onChange={handlePriceChange}
            >
              <option value="all">All</option>
              {optionsData.prices.map(price => (
                <option key={price} value={price}>
                  {price} $
                </option>
              ))}
            </StyledSelect>
          </StyledLabel>

          <BtnRst type="button" onClick={handleReset}>
            Reset
          </BtnRst>
        </Form>
      )}
    </Formik>
  );
};
