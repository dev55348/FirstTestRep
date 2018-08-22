import * as React from 'react'

import './notFoundPage.scss';

export default class NotFoundPage extends React.Component<{}, {}>{
    render() {
        return <div className="error-page-wrapper">
            <p className="error-code">404</p>
            <p className="error-code">ERROR</p>
            <p className="errorText">The link is broken or the page has been moved.</p>
        </div>
    }
}