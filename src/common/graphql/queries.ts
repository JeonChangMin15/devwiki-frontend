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
