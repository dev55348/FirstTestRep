import * as React from 'react';

import { withLocalize } from 'react-localize-redux';

class Localization extends React.Component<any, {}>{
  render() {
    if (this.props.activeLanguage == null) return null;
    return <div>
      <select onChange={(e) => { this.props.setActiveLanguage(e.target.value) }} value={this.props.activeLanguage.code}>
        <option value={"en"}>EN</option>
        <option value={"ch"}>CH</option>
      </select>
    </div>
  }
}

export default withLocalize<any>(Localization);