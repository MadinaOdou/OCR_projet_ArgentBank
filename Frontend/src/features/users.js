import produce from "@reduxjs/toolkit";
import { selectUsers } from "../utils/selectors";

const initialState = {
  status: "void",
  data: null,
  error: null,
};

const FETCHING = "users/fetching";
const RESOLVED = "users/resolved";
const REJECTED = "users/rejected";

const usersFetching = () => ({ type: FETCHING });
const usersResolved = (data) => ({ type: RESOLVED, payload: data });
const usersRejected = (error) => ({ type: REJECTED, payload: error });

// export async function fetchOrUpdateUsers(store) {
//   const status = selectUsers(store.getState()).status;
//   if (status === "pending" || status === "updating") {
//     return;
//   }
//   store.dispatch(usersFetching());
//   try {
//     const response = await fetch("");
//     const data = await response.json();
//     store.dispatch(usersResolved(data));
//   } catch (error) {
//     store.dispatch(usersRejected(error));
//   }
// }

export default function usersReducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case FETCHING: {
        if (draft.status === "void") {
          draft.status = "pending";
          return;
        }
        if (draft.status === "rejected") {
          draft.error = null;
          draft.status = "pending";
          return;
        }
        if (draft.status === "resolved") {
          draft.status = "updating";
          return;
        }
        return;
      }
      case RESOLVED: {
        if (draft.status === "pending" || draft.status === "updating") {
          draft.data = action.payload;
          draft.status = "resolved";
          return;
        }
        return;
      }
      case REJECTED: {
        if (draft.status === "pending" || draft.status === "updating") {
          draft.error = action.payload;
          draft.data = null;
          draft.status = "rejected";
          return;
        }
        return;
      }
      default:
        return;
    }
  });
}
