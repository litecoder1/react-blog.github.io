import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import IndexPage from './IndexPage'
import ArticlePage from './ArticlePage';
import TagPage from './TagPage';

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' render={props => <IndexPage {...props} />} />
      <Route path='/article/:id/:name' render={props => <ArticlePage postId={props.match.params.id} {...props} />} />
      <Route path='/tags/:id/:name' render={props => <TagPage tagId={props.match.params.id} {...props}  />} />
    </Switch>
  </Router>
)

export default App;
