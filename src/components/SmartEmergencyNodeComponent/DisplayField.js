class DisplayField extends React.Component {
    render() {
      return (
        <td onClick={this.props.onClick}>{this.props.field.value}</td>
      );
    }
  }
  