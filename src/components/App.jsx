import React from 'react'
import { hot } from 'react-hot-loader'
import styles from './App.scss'

class App extends React.Component {
    render() {
        return (
            <div className={styles.app}>
                <h1>Mjml-React Demo</h1>

                <div className={styles.page}>
                    <a href="/email-1" className={styles.link}>
                        Click to see example
                    </a>
                </div>
            </div>
        )
    }
}

export default hot(module)(App)
