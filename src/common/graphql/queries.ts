import { gql } from "@apollo/client";

export const GET_TOP_THREE_LECTURES = gql`
  query {
    fetchTopThreeLectures {
      id
      title
      writer
      price
      averageRating
      subCategory {
        name
        mainCategory {
          name
        }
      }
    }
  }
`;

export const GET_LECTURE_INFO = gql`
  query fetchLecture($lectureId: String!) {
    fetchLecture(lectureId: $lectureId) {
      id
      title
      writer
      price
      averageRating
      duration
      url
      description
      comments {
        id
        writer
        description
        rating
      }
      tags {
        name
      }
      subCategory {
        name
        mainCategory {
          name
        }
      }
    }
  }
`;

export const GET_LECTURES_LIST = gql`
  query fetchLectures(
    $main: String!
    $sub: String!
    $page: Float!
    $cost: String!
  ) {
    fetchLectures(main: $main, sub: $sub, page: $page, cost: $cost) {
      count
      lists {
        id
        title
        writer
        price
        averageRating
      }
    }
  }
`;
