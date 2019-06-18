import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from "../actions/quotes"

class Quotes extends Component {

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
               {this.props.quotes.map(quote=> {
                 return <QuoteCard
                 quote={quote}
                 removeQuote={this.props.removeQuote}
                 upvoteQuote={this.props.upvoteQuote}
                 downvoteQuote={this.props.downvoteQuote}
                 />
               })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
const mapStateToProps = state => {
  return { quotes: state.quotes }
}

const mapDispatchToProps = dispatch => {
  return {
    removeQuote: id => {

      dispatch(removeQuote(id))
    },
    upvoteQuote: id => {
      dispatch(upvoteQuote(id))
    },
    downvoteQuote: id => {
      dispatch(downvoteQuote(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
