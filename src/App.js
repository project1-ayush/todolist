import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  addItem(e){
    e.preventDefault();//default behaviour of button is when you click on it page gets refershed. In order to prevent that we wrote e.preventdefault.
    const newItem = this.state.currentItem;
    if(newItem.text !=="")
    {
     // console.log(this.state.items);//array
     // console.log(...this.state.items);//object
      //console.log(newItem);//array
      
      const items = [...this.state.items, newItem];//destructuring assignment need to google this.
     // console.log(items);//array
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:''
      }
       })
    }
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })

  }
  setUpdate(text,key){
    console.log(this.state.items);
    console.log(this.state.items.key);
    console.log(text);
    console.log(key);

    const items = this.state.items;
    
    items.map(item=>{   
      console.log(item.key + " " + item.text);
      if(item.key===key){
        console.log(item.key +"    "+key)
        item.text= text;
      }
     
      console.log(item.key + " " + item.text);
    })

    this.setState({
      items: items
    })
    
   
  }
 render(){
  return (
    <div className="App">
      <header>
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Enter task" value= {this.state.currentItem.text} onChange={this.handleInput}></input>
        
          <button type="submit">Add</button>
        </form>
        <p>{this.state.items.text}</p>
        
          <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
        
      </header>
    </div>
  );
 }
}


export default App;
