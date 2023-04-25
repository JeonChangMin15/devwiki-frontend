type MainCategory = "frontend" | "backend" | "cs";

export interface LectureData {
  id: string;
  writer: string;
  title: string;
  averageRating: number;
  subCategory: {
    name: string;
    mainCategory: {
      name: MainCategory;
    };
  };
}

export interface TopThreeLecturesType {
  fetchTopThreeLectures: LectureData[];
}
