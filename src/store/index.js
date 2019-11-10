import reducer from "../reducers";
import { createStore } from "redux";

const initialState = {
    error: '',
    isLoaded: false,
    response: [],
    value: '',
    isShowButton: false,
    currentPage : 1,
}
export const store = createStore(reducer, initialState);
