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
  background: '#ff962e', // if you want to change the color -- change here
  color: '#ff962e',
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
