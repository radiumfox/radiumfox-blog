
import {gql} from "graphql-tag";
export const GET_POSTS = gql`
  query Query {
    posts {
      id
      date
      content
      images
    }
  }
`;

export const GET_POST = gql`
  query Query {
    post(id: $postId) {
        id
        date
        content
        images
    }
  }
`;

export const CREATE_POST = gql`
  mutation Create($date: String, $content: String, $images: [String], $tags: [String]) {
    create(date: $date, content: $content, images: $images, tags: $tags) {
      images
      id
      date
      content
      tags
    }
  }
`;

export const UPDATE_POST = gql`
  mutation Mutation($images: [String], $content: String, $date: String, $id: ID) {
    update(images: $images, content: $content, date: $date, id: $id) {
      images
      id
      date
      content
    }
  }
`;

export const DELETE_POST = gql`
  mutation Delete($id: ID) {
    delete(id: $id) {
      id
    }
  }
`;