import { combineReducers } from "redux";
import { reducer as fromReducer } from "redux-form";

import dataReducer from "./dataReducer";
import gAuthReducer from "./gAuthReducer";
import termReducer from "./termReducer";
import bookReducer from "./bookReducer";
import wordReducer from "./wordReducer";
import notifyReducer from "./notifyReducer";
import flashcardReducer from "./flashcardReducer";

export default combineReducers({
  form: fromReducer,
  data: dataReducer,
  gAuth: gAuthReducer,
  term: termReducer,
  books: bookReducer,
  words: wordReducer,
  notify: notifyReducer,
  flashcard: flashcardReducer
});
