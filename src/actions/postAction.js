import * as PostApi from '../api/PostRequest.js'

export const getTimelinePosts = (id) => async (dispatch) => {
    dispatch({ type: "RETREIVING_START" });
    try {
      const { data } = await PostApi.getTimelinePosts(id);
      dispatch({ type: "RETREIVING_SUCCESS", data: data });
    } catch (error) {
      console.error(error);
      dispatch({ type: "RETREIVING_FAIL" });
    }
  };