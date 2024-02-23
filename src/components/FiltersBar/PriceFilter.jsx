import { useQueryParams } from 'hooks/useQueryParams';
import { StyledLabel, StyledSelect } from './FiltersBar.styled';

export const PriceFilter = () => {
  const { price, changePrice } = useQueryParams();

  return (
    <StyledLabel>
      Price
      <StyledSelect
        id="price"
        value={price}
        onChange={e => changePrice(e.target.value)}
      >
        <option value="all">All $</option>
        <option value="10">10 $</option>
        <option value="20">20 $</option>
        <option value="30">30 $</option>
        <option value="40">40 $</option>
      </StyledSelect>
    </StyledLabel>
  );
};
