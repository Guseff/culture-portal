import React from 'react';
import { useSelector } from 'react-redux';
import { Timeline } from 'vertical-timeline-component-for-react';
import { Spinner } from 'react-bootstrap';
import AuthorTimelineItem from '../AuthorTimelineItem';

interface IAuthorTimelineState {
  byId: number[];
  author: object;
  pending: boolean;
}

interface IAuthorTimelineFacts {
  endAt: string | null;
  startAt: string;
  description: string;
}

interface IAuthorTimelineProps {
  id: number;
}

const AuthorTimeline: React.FC<IAuthorTimelineProps> = ({ id }) => {
  const authorState: IAuthorTimelineState = useSelector(
    (store: any) => store.author
  );
  const { byId, author, pending }: IAuthorTimelineState = authorState;
  const locale = 'ru';

  if (pending) {
    return <Spinner className="spinner" animation="border" />;
  }

  id = byId[id];

  return (
    <>
      {byId.length && (
        <Timeline lineColor={'#ddd'}>
          {author[id][locale].biography.map(
            (fact: IAuthorTimelineFacts, idx) => (
              <AuthorTimelineItem key={idx} fact={fact} />
            )
          )}
        </Timeline>
      )}
    </>
  );
};

export default AuthorTimeline;
