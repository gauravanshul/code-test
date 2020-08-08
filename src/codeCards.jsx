import React, {Component} from 'react';
import "./codeCards.css";


class CardComponent extends Component {
  constructor(){
    super();
    this.state = {
        cardMap: [1,2,3,4,5,6,7,8,9]
    }

  }

  doShuffle = () => {
    let items = this.state.cardMap;
    for(let i=items.length - 1; i>0; i--){
      let j = Math.floor(Math.random()*(i+1));
      let temp = items[i];
      items[i] = items[j];
      items[j] =temp;
    }
    this.setState({
      cardMap: items
    })
  }

  doSort = () => {
    let items = this.state.cardMap;
    items = items.sort();
    this.setState({
      cardMap: items
    })
  }

  render(){
    let cardMap = this.state.cardMap;
    let colorWrap = ["","#6f98a8", "#2B8EAD", "#2f454e", "#2B8EAD", "#2f454e", "#BFBFBF", "#bfbfbf", "#6f98a8", "#2f454e"];
    return(
      <div className="card-parent">
        <div className="web">
          <div className="left-in">
            <div className="card-wrap">
              {cardMap.map((item)=>(
                <div className="card" style={{background: colorWrap[item]}}>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="right-in">
            <div className="actions-wrap">
              <div className="item">
                <button onClick={this.doShuffle}>Shuffle</button>
              </div>
              <div className="item">
                <button onClick={this.doSort}>Sort</button>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile">
          <div className="actions-wrap">
            <div className="item">
              <button onClick={this.doShuffle}>Shuffle</button>
            </div>
            <div className="item">
              <button onClick={this.doSort}>Sort</button>
            </div>
          </div>
          <div className="card-wrap">
          {cardMap.map((item)=>(
            <div className="card-in" style={{borderLeft: `10px solid ${colorWrap[item]}`}}>
              {item}
            </div>
          ))}
          </div>
        </div>
      </div>
      )
  }
}

export default CardComponent;
