<div id="myReactApp"></div>

<script type="text/babel">
  class Greeter extends React.Component { 
    render() { 
      return <h1>{this.props.greeting}</h1>
    } 
  } 

  ReactDOM.render(<Greeter greeting="Hello World!" />, document.getElementById('myReactApp'));
</script>