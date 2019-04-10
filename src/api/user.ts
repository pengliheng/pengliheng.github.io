import { FETCH_USER_INFO } from '../redux-relate/constant/http'
import AxiosOrLocal from '../utils/axiosOrLocal'

export const fetchUser = () =>
  new AxiosOrLocal({
    key: FETCH_USER_INFO,
    url: 'https://api.pipk.top/graphql',
    method: 'post',
    data: {
      query: `{
        viewer {
          name avatarUrl login bio url createdAt isHireable
        }
      }`,
    },
  })
