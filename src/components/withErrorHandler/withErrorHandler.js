import React, { Component } from 'react';
import Modal from '../UI/Modal';

const withErrorHandler = (Wrappedcomponent, axios) => {
  // we need information from wrappedcomponent to show error, axios here is the one which we put global error handler
  return class extends Component {
    state = {
      error: null,
    };
    componentDidMount() {
      // in any request, error is null
      axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error: error });
        },
      );
    }

    errorConfirmedHandler = () => {
      this.setState({
        error: null,
      });
    };
    render() {
      return (
        <>
          <Modal show={this.state.error} modalclosed={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <Wrappedcomponent {...this.props} />;
        </>
      );
    }
  };
};

export default withErrorHandler;
