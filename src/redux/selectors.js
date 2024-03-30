import { createSelector } from "@reduxjs/toolkit";

export const selectTeachers = state => state.teachers.teachers;
export const selectFavorites = state => state.favorites.favorites;
export const selectLoading = state => state.teachers.loading;
export const selectFilter = state => state.filter.filters;

export const getFilteredTeachers = createSelector(
  [selectFilter, selectTeachers],
  (filters, teachers) => {
    const { language, level, price } = filters;

    const resetAll =
      language === 'all' && level === 'all' && price === 'all';

    if (resetAll) {
      return teachers;
    }

    return teachers.filter(teacher => {
      const existLanguage =
        language.includes('all') || teacher.languages.includes(language);
      const existLevel =
        level === 'all' || teacher.levels.some(el => el.includes(level));
      const existPrice =
        price === 'all' || teacher.price_per_hour === Number(price);

      return existLanguage && existLevel && existPrice;
    });
  }
);