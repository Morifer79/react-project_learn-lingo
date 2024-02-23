import { useQueryParams } from 'hooks/useQueryParams';
import { StyledLabel, StyledSelect } from './FiltersBar.styled';

export const LanguagesFilter = () => {
  const { language, changeLanguage } = useQueryParams();

  return (
    <StyledLabel>
      Languages
      <StyledSelect
        id="language"
        value={language}
        onChange={e => changeLanguage(e.target.value)}
      >
        <option value="all">All</option>
        <option value="french">French</option>
        <option value="english">English</option>
        <option value="german">German</option>
        <option value="ukrainian">Ukrainian</option>
        <option value="polish">Polish</option>
      </StyledSelect>
    </StyledLabel>
  );
};
