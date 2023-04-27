export type MainCategory = "frontend" | "backend" | "cs";

interface CommentInfo {
  id: string;
  writer: string;
  description: string;
  rating: number;
}

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
  comments: CommentInfo[];
  tags: { name: string }[];
  description: string;
}

export type TopThreeLecture = Omit<
  LectureData,
  "price" | "duration" | "url" | "comments" | "tags" | "description"
>;

export interface TopThreeLecturesType {
  fetchTopThreeLectures: TopThreeLecture[];
}

export interface DetailLecture {
  fetchLecture: LectureData;
}
