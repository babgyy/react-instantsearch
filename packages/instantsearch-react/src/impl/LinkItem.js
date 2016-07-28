import React, {PropTypes, Component} from 'react';

import {isSpecialClick} from './utils';
import omit from 'lodash/object/omit';

export default class ItemLink extends Component {
  static propTypes = {
    item: PropTypes.any.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = e => {
    if (isSpecialClick(e)) {
      return;
    }
    this.props.onClick(this.props.item);
    e.preventDefault();
  };

  render() {
    return (
      <a
        {...omit(this.props, 'onClick', 'item')}
        onClick={this.onClick}
      />
    );
  }
}
