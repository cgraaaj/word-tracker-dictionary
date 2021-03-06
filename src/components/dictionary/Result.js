import React from "react";
import { connect } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import _ from "lodash";

import WordList from "./WordList";
import Audio from "./Audio";

class Result extends React.Component {
  notify() {
    toast(this.props.dbRespose.message, {
      bodyStyle:{color: "#000000"},
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }
  render() {
    
    return this.props.words.length > 0 ? (
      <div>
        {!_.isEmpty(this.props.dbRespose) ? this.notify() : null}
        <ToastContainer />
        <div className="five wide column">
          <WordList />
        </div>
      </div>
    ) : this.props.words.length === 0 ? null : (
      <div>
        <div className="ui large horizontal divided list">
          <div className="item">
            <Audio phonetics={[]} cardId={this.props.cardId} />
          </div>
          <div className="item">
            <div className="content">
              <div className="header">{this.props.words.term}</div>
            </div>
          </div>
        </div>
        <div className="ui card centered">
          <div className="image">
            <img src={this.props.card.gif} alt={this.props.card.alt}></img>
          </div>
          <div className="content">
            <div className="header">{this.props.card.header}</div>
            <div className="meta">{this.props.card.meta}</div>
            <div className="description">{this.props.card.description}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let cardId = Math.floor(
    Math.random() * (Object.keys(state.data.cards).length - 1 + 1) + 1
  );
  console.log(state.data.words)
  return {
    words: state.data.words,
    cardId,
    card: state.data.cards[cardId],
    dbRespose: state.words.definitionResp
  };
};

export default connect(mapStateToProps, {})(Result);
