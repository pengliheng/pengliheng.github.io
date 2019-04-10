import { FETCH_HOME_PAGE } from '../redux-relate/constant/http'
import AxiosOrLocal from '../utils/axiosOrLocal'
export const fetchHome = () =>
  new AxiosOrLocal({
    key: FETCH_HOME_PAGE,
    url: 'https://api.pipk.top/graphql',
    method: 'post',
    data: {
      query: `{
            repositoryOwner(login: "pengliheng") {
                repository(name: "pengliheng.github.io") {
                    object(expression: "master:README.md") {
                        ... on Blob {
                            text
                        }
                    }
                }
            }
        }`,
    },
  })
