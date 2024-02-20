import { useQueryParams } from 'hooks/useQueryParams';

export const LanguagesFilter = () => {
  const { language, changeLanguage } = useQueryParams();

  return (
    <label>Languages
      <select value={language} onChange={e => changeLanguage(e.target.value)}>
        <option value="all">All</option>
        <option value="french">French</option>
        <option value="english">English</option>
        <option value="german">German</option>
        <option value="ukrainian">Ukrainian</option>
        <option value="polish">Polish</option>
      </select>
    </label>
  );
};
