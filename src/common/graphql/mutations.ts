import { gql } from "@apollo/client";

export const CREATE_COMMENT = gql`
  mutation createComment($lectureId: String!, $commentInput: CommentInput!) {
    createComment(lectureId: $lectureId, commentInput: $commentInput) {
      id
      writer
    }
  }
`;
