import { useQueryParams } from 'hooks/useQueryParams';
import { LanguagesFilter } from './LanguagesFilter';
import { LevelFilter } from './LevelFilter';
import { PriceFilter } from './PriceFilter';
import { BtnRst, FiltersWrapper } from './FiltersBar.styled';

export const FiltersBar = () => {
  const { resetFilters } = useQueryParams();
  return (
    <FiltersWrapper>
      <LanguagesFilter />
      <LevelFilter />
      <PriceFilter />
      <BtnRst onClick={resetFilters}>Reset</BtnRst>
    </FiltersWrapper>
  );
};
