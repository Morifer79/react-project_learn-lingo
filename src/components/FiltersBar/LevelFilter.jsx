import { useQueryParams } from 'hooks/useQueryParams';
import { StyledLabel, StyledSelect } from './FiltersBar.styled';

export const LevelFilter = () => {
  const { level, changeLevel } = useQueryParams();

  return (
    <StyledLabel>
      Level of knowledge
      <StyledSelect
        id="level"
        value={level}
        onChange={e => changeLevel(e.target.value)}
      >
        <option value="all">All</option>
        <option value="beginner">A1 Beginner</option>
        <option value="elementary">A2 Elementary</option>
        <option value="intermediate">B1 Intermediate</option>
        <option value="upper-intermediate">B2 Upper-Intermediate</option>
      </StyledSelect>
    </StyledLabel>
  );
};
