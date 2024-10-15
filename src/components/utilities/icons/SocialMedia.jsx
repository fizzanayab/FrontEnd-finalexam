import { Component } from "react";
import './SocialMedia.css'; 

class SocialMedia extends Component {
  render() {
    const { icon_name, size, color } = this.props;

    return (
      <i className={`fa fa-${icon_name}`} style={{ fontSize: size, color }} aria-hidden="true"></i>
    );
  }
}

export default SocialMedia;
