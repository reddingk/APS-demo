class APSLayout extends React.Component {
    constructor(props) {
      super(props);      
    }
  
    render() {      
      return (
        <div className="layout-container">
            <h1>Footer</h1>
        </div>
      )
    }
  }
  
  ReactDOM.render(<APSLayout />, document.getElementById('layout'));
