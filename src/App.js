// package
import React, {
  Suspense,
  lazy,
} from 'react';
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux'

// local
import store from '@/redux-relate/store'
const Layout = withRouter(lazy(() => import('@/components/Layout')))
const HomePage = withRouter(lazy(() => import('@/views/Home')))
const ArticlePage = withRouter(lazy(() => import('@/views/Article')))
const ArticleDetailPage = withRouter(lazy(() => import('@/views/Article/Detail')))
const RepositoryPage = withRouter(lazy(() => import('@/views/Repository')))
const RepositoryDetailPage = withRouter(lazy(() => import('@/views/Repository/Detail')))
const ProjectPage = withRouter(lazy(() => import('@/views/Project')))
// import Layout from '@/components/Layout'
// import HomePage from '@/views/Home'
// import ArticlePage from '@/views/Article'
// import ArticleDetailPage from '@/views/Article/Detail'
// import RepositoryPage from '@/views/Repository'
// import RepositoryDetailPage from '@/views/Repository/Detail'
// import ProjectPage from '@/views/Project'
import CustomBrowserRouter from '@/components/CustomBrowserRouter'

// main
export default () => (
  <Provider store={store}>
    <Router>
      <Suspense fallback = {<div> Loading... </div>}> 
        <Switch >
          <Layout>
            <Route exact path = "/" component={HomePage} />
            <Route path="/article" component={ArticlePage} />
            <Route path="/articleDetail" component={ArticleDetailPage} />
            <Route path="/repository" component={RepositoryPage} />
            <Route path="/repositoryDetail" component={RepositoryDetailPage}/>
            <Route path="/project" component={ProjectPage} />
          </Layout>
        </Switch>
      </Suspense>
    </Router>
  </Provider>
)