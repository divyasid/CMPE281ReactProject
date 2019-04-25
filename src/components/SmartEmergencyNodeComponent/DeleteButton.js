class DeleteButton extends React.Component {
    render() {
      return (
        <button type="button" onClick={this.props.onClick} className="edit btn btn-default" ><span className="glyphicon glyphicon-trash"></span></button>
      );
    }
  }