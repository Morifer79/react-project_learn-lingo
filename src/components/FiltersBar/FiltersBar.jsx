import { BtnRst, StyledLabel, StyledSelect } from './FiltersBar.styled';
import { useEffect, useState } from 'react';
import { setFilter } from '../../redux/filtersSlice';
import { useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';

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
              <option value="French">French</option>
              <option value="English">English</option>
              <option value="German">German</option>
              <option value="Ukrainian">Ukrainian</option>
              <option value="Polish">Polish</option>
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
              <option value="A1 Beginner">A1 Beginner</option>
              <option value="A2 Elementary">A2 Elementary</option>
              <option value="B1 Intermediate">B1 Intermediate</option>
              <option value="B2 Upper-Intermediate">B2 Upper-Intermediate</option>
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
              <option value="10">10 $</option>
              <option value="20">20 $</option>
              <option value="30">30 $</option>
              <option value="40">40 $</option>
            </StyledSelect>
          </StyledLabel>

          <BtnRst type='button' onClick={handleReset}>Reset</BtnRst>

        </Form>
      )}
    </Formik>
  );
};
