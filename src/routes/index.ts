import { lazy } from 'react'
import { withRouter } from 'react-router-dom'
// local
const HomePageComoponent = withRouter(
  lazy(() =>
    import('../views/Home/index').then(({ HomePage }: any) => ({
      default: HomePage,
    })),
  ),
)
const ArticlePageComponent = withRouter(
  lazy(() =>
    import('../views/ArticleList').then(({ ArticlePage }: any) => ({
      default: ArticlePage,
    })),
  ),
)
const ArticleDetailPageComponent = withRouter(
  lazy(() =>
    import('../views/ArticleDetail').then(({ ArticleDetailPage }: any) => ({
      default: ArticleDetailPage,
    })),
  ),
)
const RepositoryDetailPageComponent = withRouter(
  lazy(() =>
    import('../views/RepositoryDetail').then(
      ({ RepositoryDetailPage }: any) => ({
        default: RepositoryDetailPage,
      }),
    ),
  ),
)
const RepositoryPageComponent = withRouter(
  lazy(() =>
    import('../views/RepositoryList').then(({ RepositoryPage }: any) => ({
      default: RepositoryPage,
    })),
  ),
)
const PageNotFoundComponent = withRouter(
  lazy(() =>
    import('../components/PageNotFound').then(({ PageNotFound }: any) => ({
      default: PageNotFound,
    })),
  ),
)
// import HomePage from '@/views/Home'
// import ArticlePage from '@/views/Article'
// import ArticleDetailPage from '@/views/Article/Detail'
// import RepositoryPage from '@/views/Repository'
// import RepositoryDetailPage from '@/views/Repository/Detail'
// import ProjectPage from '@/views/Project'
// import CustomBrowserRouter from '@/components/CustomBrowserRouter'

export default [
  {
    component: HomePageComoponent,
    content: '主页',
    exact: true,
    path: '/',
  },
  {
    component: ArticlePageComponent,
    content: '文章',
    exact: false,
    path: '/article',
  },
  {
    component: ArticleDetailPageComponent,
    exact: false,
    path: '/articleDetail',
  },
  {
    component: RepositoryPageComponent,
    content: '仓库',
    exact: false,
    path: '/repository',
  },
  {
    component: RepositoryDetailPageComponent,
    exact: false,
    path: '/repositoryDetail',
  },
  {
    component: PageNotFoundComponent,
    exact: false,
    path: null,
  },
]
