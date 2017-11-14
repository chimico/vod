import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class MoviePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  
  play(url) {
    this.url = url;
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody>
            <ReactPlayer url={this.url} playing={this.state.modal}/>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}