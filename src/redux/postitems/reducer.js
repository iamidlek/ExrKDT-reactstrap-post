import { ADD_POST, REMOVE_POST } from "./types";

const postItemReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POST:
      const { title, subtitle, url, text } = action.payload;
      return [
        ...state,
        {
          title: title,
          subtitle: subtitle,
          url: url,
          text: text,
        },
      ];
    case REMOVE_POST:
      return state.filter((item) => item.title !== action.title);
    default: {
      return state;
    }
  }
};

export default postItemReducer;
