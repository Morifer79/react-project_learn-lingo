import { useQueryParams } from 'hooks/useQueryParams';

export const PriceFilter = () => {
  const { price, changePrice } = useQueryParams();

  return (
    <label>Price
      <select value={price} onChange={e => changePrice(e.target.value)}>
        <option value="all">All</option>
        <option value="10">10$</option>
        <option value="20">20$</option>
        <option value="30">30$</option>
        <option value="40">40$</option>
      </select>
    </label>
  );
};
