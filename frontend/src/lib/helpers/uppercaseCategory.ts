export const uppercaseCategory = (category: string) => {
  const upCategory = category.charAt(0).toUpperCase() + category.slice(1);
  return upCategory;
};
