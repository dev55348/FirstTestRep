import * as React from 'react';

class HowItWorks extends React.Component<{}, {}>{
    render(){
      return <div className="how-it-works">
        <p className="slogan">
            Let’s build something great together.<br />
            Be rewarded for your contributions
        </p>
        <p className="title">How it works</p>
        <div className="col-3">
            <p className="article"><span>1. Write something good</span>VesEbulum fermentum
                rutrum rutrum. Sed ut quam
                molesEe nibh consectetur
                finibus. Sed sed elementum
                nisl. Curabitur sed est metus.</p>
        </div>
        <div className="col-3">
            <p className="article"><span>2. Comment, like, share</span>VesEbulum fermentum
                rutrum rutrum. Sed ut quam
                molesEe nibh consectetur
                finibus. Sed sed elementum
                nisl. Curabitur sed est metus.</p>
        </div>
        <div className="col-3">
            <p className="article"><span>3. Earn for your work</span>VesEbulum fermentum
                rutrum rutrum. Sed ut quam
                molesEe nibh consectetur
                finibus. Sed sed elementum
                nisl. Curabitur sed est metus.</p>
        </div>
      </div>
    }
}
export default HowItWorks