import { FETCH_ARTICLE_LIST } from '../redux-relate/constant/http'
import AxiosOrLocal from '../utils/axiosOrLocal'

// fetchArticleList
export const fetchArticleList = () =>
  new AxiosOrLocal({
    key: FETCH_ARTICLE_LIST,
    url: 'https://api.pipk.top/graphql',
    method: 'post',
    data: {
      query: ` {
			    repositoryOwner(login: "pengliheng") {
			        repository(name: "pengliheng.github.io") {
			            issues(first: 100, states: OPEN) {
			                edges {
			                    node {
			                        updatedAt createdAt title id
			                        author {
			                            avatarUrl login
			                        }
			                        labels(first: 5) {
			                            nodes {
			                                name color
			                            }
			                        }
			                    }
			                }
			            }
			        }
			    }
			}`,
    },
  })

// fetchArticleDetail
export const fetchArticleDetail = (keyWord: string) =>
  new AxiosOrLocal({
    key: keyWord,
    url: 'https://api.pipk.top/graphql',
    method: 'post',
    data: {
      query: `{
				search(
				  first: 10, 
				  query: "repo:pengliheng/pengliheng.github.io author:pengliheng type:Issues ${keyWord}",
				  type: ISSUE
				) {
				  edges {
					node {
					  ... on Issue {
						body title
					  }
					}
				  }
				}
			}`,
    },
  })
