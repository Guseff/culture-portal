import React from 'react';
import { TimelineItem } from 'vertical-timeline-component-for-react';

interface IAuthorTimelineItemFacts {
  endAt: string | null;
  startAt: string;
  description: string;
}

interface IAuthorTimelineItemProps {
  fact: IAuthorTimelineItemFacts;
}

const AuthorTimelineItem: React.FC<IAuthorTimelineItemProps> = ({ fact }) => {
  return (
    <TimelineItem
      dateText={fact.endAt ? `${fact.startAt} - ${fact.endAt}` : fact.startAt}
      dateInnerStyle={{ background: '#ff962e' }}
      style={{ color: '#ff962e' }}
    >
      <p>{fact.description}</p>
    </TimelineItem>
  );
};

export default AuthorTimelineItem;
