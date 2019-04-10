import {
  FETCH_PENDING,
  FETCH_REJECT,
  FETCH_RESOLVE,
} from '../../redux-relate/constant/http'

export function fetchPending() {
  return {
    payload: {},
    type: FETCH_PENDING,
  }
}
export function fetchResolve(res: any) {
  return {
    payload: res,
    type: FETCH_RESOLVE,
  }
}
export function fetchReject(res: any) {
  return {
    payload: res,
    type: FETCH_REJECT,
  }
}
