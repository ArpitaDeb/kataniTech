let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {
      return "This dog has " + dog.numLegs + "legs.";}
  };
  dog.sayLegs();

  //
  const CurrentDate = (props) => {
    return (
      <div>
        <p>The current date is: {props.date} </p>
      </div>
    );
  };
  
  class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>What date is it?</h3>
          <CurrentDate date = {Date()} />
        </div>
      );
    }
  };
  //array
  const List = (props) => {
    { /* change code below this line */ }
    return <p>{props.tasks.join(', ')}</p>
    { /* change code above this line */ }
  };
  
  class ToDo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>
          { /* change code below this line */ }
          <List tasks= {["walkDog", "cook", "clean"]}/>
          <h2>Tomorrow</h2>
          <List tasks= {["biking", "cook", "clean", "dance"]}/>
          { /* change code above this line */ }
        </div>
      );
    }
  };
//


  
  