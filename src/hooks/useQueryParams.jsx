import { useSearchParams } from "react-router-dom";

export const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const language = searchParams.get('languages') ?? 'all';
  const level = searchParams.get('level') ?? 'all';
  const price = searchParams.get('price') ?? 'all';

  const changeLanguage = newLanguage => {
    searchParams.set('languages', newLanguage);
    setSearchParams(searchParams);
  };

  const changeLevel = newLevel => {
    searchParams.set('level', newLevel);
    setSearchParams(searchParams);
  };

  const changePrice = newPrice => {
    searchParams.set('price', newPrice);
    setSearchParams(searchParams);
  };

  const resetFilters = () => {
    setSearchParams({
      language: 'all',
      level: 'all',
      price: 'all',
    });
  };

  return{
    language,
    level,
    price,
    changeLanguage,
    changeLevel,
    changePrice,
    resetFilters,
  }
}