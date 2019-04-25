class TableHeader extends React.Component {
    render() {
      var tableheaders = [];
      this.props.fielddata.forEach(function(fd) {
        tableheaders.push(<th>{fd.header}</th>)
      });
      tableheaders.push(<th className="buttoncolumn">Actions</th>);
      return (
        <tr>
          {tableheaders}
        </tr>
      );
    }
  }