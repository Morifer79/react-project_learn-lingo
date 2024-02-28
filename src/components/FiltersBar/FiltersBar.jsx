import { useQueryParams } from 'hooks/useQueryParams';
import { LanguagesFilter } from './LanguagesFilter';
import { LevelFilter } from './LevelFilter';
import { PriceFilter } from './PriceFilter';
import { BtnRst } from './FiltersBar.styled';

export const FiltersBar = () => {
  const { resetFilters } = useQueryParams();
  return (
    <>
      <LanguagesFilter />
      <LevelFilter />
      <PriceFilter />
      <BtnRst onClick={resetFilters}>Reset</BtnRst>
    </>
  );
};
