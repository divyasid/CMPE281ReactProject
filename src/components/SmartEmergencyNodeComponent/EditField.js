class EditField extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: this.props.field.value
      };
      this.handleFieldChange = this.handleFieldChange.bind(this);
    }
    handleFieldChange(e) {
      this.setState({
        value: e.target.value
      });
      // Send value back to row - note: state is too slow
      this.props.sendValueToParent(this.props.field.name, e.target.value);
    }
    render() {
      return (
        <td>
          <input 
            className="form-control input-sm"
            type="text"
            value={this.state.value}
            placeholder={this.props.field.placeholder}
            onChange={this.handleFieldChange}>
          </input>
        </td>
      );
    }
  }