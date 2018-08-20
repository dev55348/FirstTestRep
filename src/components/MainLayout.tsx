import * as React from 'react';
import Header from "./header/TopBar"
import Footer from "./footer/Footer"

class Homepage extends React.Component<{}, {}>{
    render() {
        return <div>
            <Header />
             {this.props.children}
            <Footer />
        </div>
    }
}
export default Homepage