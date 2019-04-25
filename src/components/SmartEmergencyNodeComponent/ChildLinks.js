class ChildLinks extends React.Component {
    render() {
      var render_links = [];
      this.props.childlinks.forEach(function(cl) {
        if (cl.uri) {
          render_links.push(<FullWidthLinkButton buttontext={cl.name} link={""} disabled={false}/>);
        } else {
          render_links.push(<FullWidthLinkButton buttontext={cl.name} link={cl.uri} disabled={true}/>);  
        }
      }, this);
      return (
          <div id="childLinks" class="row">
             {render_links}
          </div>
      );
    }
  }