import { useQueryParams } from 'hooks/useQueryParams';
import { LanguagesFilter } from './LanguagesFilter/LanguagesFilter';
import { LevelFilter } from './LevelFilter/LevelFilter';
import { PriceFilter } from './PriceFilter/PriceFilter';
import { BtnRst } from './FiltersBar.styled';

export const FiltersBar = () => {
  const { resetFilters } = useQueryParams();
  return (
    <>
      <LanguagesFilter />
      <LevelFilter />
      <PriceFilter/>
      <BtnRst onClick={resetFilters}>RESET</BtnRst>
    </>
  );
};

