import * as React from 'react';

class Welcome extends React.Component<{}, {}>{
    render(){
      return <div className="welcome-wrapper">
        <h1>Welcome to KNOWPIA</h1>
        <p>- Ut in sodales elit, id rhoncus urna. Pellentesque habitant morbi trisEque senectus et netus et malesuada fames ac turpis egestas.</p>
        <p>- Feature 1: In hac habitasse platea dictumst. Aenean ultricies elit a mi tempus, ut fermentum quam accumsan.</p>
        <p>- Feature 2: Integer cursus ligula in tellus facilisis semper. Morbi orci massa, placerat a nibh nec, hendrerit bibendum urna.</p>
      </div>
    }
}
export default Welcome