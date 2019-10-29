import React from 'react';
import './App.css';
import ListItem from './ListItem'
class MyList extends React.Component {
  constructor (props) {
    super()
    this.state = {
      toDoItemArray: props.theList,
      newItem: " "
    }
  }
  clearList (e) {
    console.log("Clearing list!")
    e.preventDefault();
    this.setState({
      toDoItemArray: []
    })
  }
  newItemChange(e) {
    this.setState({
      newItem: e.target.value
    })
  }

  addItem(e) {
    e.preventDefault();
    var newArr = this.state.toDoItemArray;
    newArr.push(this.state.newItem);
    console.log('heyy buddy')
    this.setState({
      newItem: '',
      toDoItemArray: newArr
    })
  }
  render() {
    let todoItems = this.state.toDoItemArray.map(( item, index) => (
      <ListItem doThis={item} key={index} />
    ))
    
    return (
      <div>
        <form>
          <input type="text"
            placeholder="Type an item here"
            onChange={(e) => this.newItemChange(e)}
            value={this.state.newItem}
            />
            <button onClick={(e) => this.addItem(e)}>Add it!</button>
          </form>
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          {todoItems}
          </ul>
          <button onClick={(e) => this.clearList(e)}>Finished the list!</button>
          
      </div>
      
    )
  }

}

export default MyList;
