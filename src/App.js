import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const LazyHome = React.lazy(() => import('./Home'))
const LazyTopics = React.lazy(() => import('./Topics'))
const LazySettings = React.lazy(() => import('./Settings'))

const Loading = () => <p>Loading...</p>

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topics</Link>
                        </li>
                        <li>
                            <Link to="/settings">Settings</Link>
                        </li>
                    </ul>

                    <hr />

                    <React.Suspense fallback={<Loading />}>
                        <Route exact path="/" component={LazyHome} />
                        <Route path="/topics" component={LazyTopics} />
                        <Route path="/settings" component={LazySettings} />
                    </React.Suspense>
                </div>
            </Router>
        )
    }
}

export default App
