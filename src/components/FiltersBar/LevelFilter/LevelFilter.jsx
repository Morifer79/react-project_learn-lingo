import { useQueryParams } from 'hooks/useQueryParams';

export const LevelFilter = () => {
  const { level, changeLevel } = useQueryParams();

  return (
    <label>Level of knowledge
      <select value={level} onChange={e => changeLevel(e.target.value)}>
        <option value="all">All</option>
        <option value="beginner">A1 Beginner</option>
        <option value="elementary">A2 Elementary</option>
        <option value="intermediate">B1 Intermediate</option>
        <option value="upper-intermediate">B2 Upper-Intermediate</option>
      </select>
    </label>
  );
};
