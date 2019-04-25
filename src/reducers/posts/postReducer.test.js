import { types } from "./../../actions/types";
import postsReducer from "./postReducer";

describe("Posts Reducer", () => {
  it("Should return a default state", () => {
    const newState = postsReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it("Should return new state if receiving types", () => {
    const posts = [
      { title: "Test 1" },
      { title: "Test 1" },
      { title: "Test 1" }
    ];
    const newState = postsReducer(undefined, {
      type: types.GET_POSTS,
      payload: posts
    });
    expect(newState).toEqual(posts);
  });
});
