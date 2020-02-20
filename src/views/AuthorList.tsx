import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { setAuthor } from 'Actions';

interface SelectTestProps {
  dispatch: Dispatch;
}

class AuthorList extends React.Component<SelectTestProps> {
  onClickHandle = (e): void => {
    this.props.dispatch(
      setAuthor(Number.parseInt(e.currentTarget.href.slice(-1), 10))
    );
  };

  render() {
    const pages = [1, 2, 3, 4, 5, 6, 7]; // TODO get array from data
    return (
      <Container>
        <h3>Author List</h3>
        {pages.map(x => {
          return (
            <Nav.Link
              key={x}
              as={Link}
              to={`/author/${x}`}
              onClick={this.onClickHandle}
            >
              {`Author Page #${x}`}
            </Nav.Link>
          );
        })}
      </Container>
    );
  }
}

export default connect()(AuthorList);
