import { MainCategory, TopThreeLecturesType } from "../types/queries";

export const filteringLecture = (
  data: TopThreeLecturesType | undefined,
  category: MainCategory
) => {
  if (!data) return [];

  return data?.fetchTopThreeLectures
    .filter((lecture) => lecture.subCategory.mainCategory.name === category)
    .sort((a, b) => b.averageRating - a.averageRating);
};
