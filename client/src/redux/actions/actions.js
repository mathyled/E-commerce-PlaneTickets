import axios from "axios";
import { TYPES } from "./types";




export const changePage = (number) => {
    return {
      type: TYPES.CHANGE_PAGE,
      payload: number,
    };
  };