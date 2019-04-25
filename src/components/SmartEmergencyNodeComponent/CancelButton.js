class CancelButton extends React.Component {
    render() {
      return (
        <button type="button" onClick={this.props.onClick} className="edit btn btn-default btn-danger" ><span className="glyphicon glyphicon-remove"></span></button>
      );
    }
  }
  