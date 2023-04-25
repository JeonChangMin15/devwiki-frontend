export type MainCategory = "frontend" | "backend" | "cs";

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
  price: number;
  duration: number;
  url: string | null;
  comments: {
    id: string;
    writer: string;
    description: string;
    rating: number;
  }[];
  tags: { name: string }[];
}

export type TopThreeLecture = Omit<
  LectureData,
  "price" | "duration" | "url" | "comments" | "tags"
>;

export interface TopThreeLecturesType {
  fetchTopThreeLectures: TopThreeLecture[];
}

export interface DetailLecture {
  fetchLecture: LectureData[];
}
