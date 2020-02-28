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

const timelineItemStyles = {
  background: '#663036',
  color: '#d6a57c',
};

const AuthorTimelineItem: React.FC<IAuthorTimelineItemProps> = ({ fact }) => {
  return (
    <TimelineItem
      dateText={fact.endAt ? `${fact.startAt} - ${fact.endAt}` : fact.startAt}
      dateInnerStyle={{ background: timelineItemStyles.background }}
      style={{ color: timelineItemStyles.color }}
    >
      <p>{fact.description}</p>
    </TimelineItem>
  );
};

export default AuthorTimelineItem;
