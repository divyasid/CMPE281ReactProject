class FullWidthLinkButton extends React.Component {
    render() {
      if (this.props.disabled) {
        var class_name = "btn btn-default btn-block disabled"
      } else {
        var class_name = "btn btn-default btn-block"
      }
      return (
         <a href={this.props.link} className={class_name}>{this.props.buttontext}</a>
     );
    }
  }