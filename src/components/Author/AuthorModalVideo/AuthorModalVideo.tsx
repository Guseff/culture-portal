import React, { Component } from 'react';
import { Button, Image } from 'react-bootstrap';
import ModalVideo from 'react-modal-video';
import ModalLogo from '../../../assets/images/youtube-icon.png';

interface IAuthorModalVideoState {
  isOpen: boolean;
}

interface IAuthorModalVideoProps {
  videoId: string;
}

class AuthorModalVideo extends Component<IAuthorModalVideoProps, IAuthorModalVideoState> {
  state = {
    isOpen: false,
  };

  openModal = () => {
    this.setState({
      isOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    const { isOpen } = this.state;
    const { videoId } = this.props;

    return (
      <>
        <ModalVideo
          channel="youtube"
          videoId={videoId}
          isOpen={isOpen}
          onClose={this.closeModal}
        />
        <Button
          variant="outline-light"
          onClick={this.openModal}
          className="Author-page_youtube-button"
        >
          <Image
            src={ModalLogo}
            alt="youtube-logo"
            className="Author-page_youtube-logo"
          />
        </Button>
      </>
    );
  }
}

export default AuthorModalVideo;
