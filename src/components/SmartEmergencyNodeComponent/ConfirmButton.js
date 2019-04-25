class ConfirmButton extends React.Component {
    render() {
      return (
        <button type="button" onClick={this.props.onClick} className="edit btn btn-default btn-success" ><span className="glyphicon glyphicon-ok"></span></button>
      );
    }
  }