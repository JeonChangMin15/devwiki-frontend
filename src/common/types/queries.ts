export interface TopThreeLecturesType {
  fetchTopThreeLectures: {
    id: string;
    writer: string;
    title: string;
    averageRating: number;
    subCategory: {
      name: string;
      mainCategory: {
        name: string;
      };
    };
  }[];
}
