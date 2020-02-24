import React from 'react';
import { Timeline } from 'vertical-timeline-component-for-react';
import AuthorTimelineItem from '../AuthorTimelineItem';

interface IAuthorTimelineFacts {
  endAt: string | null;
  startAt: string;
  description: string;
}

interface IAuthorTimelineProps {
  id: string;
  author: object;
  language: string;
}

const timelineStyles = {
  lineColor: '#ddd', // if you want to change the color -- change here
};

const AuthorTimeline: React.FC<IAuthorTimelineProps> = ({
  id,
  author,
  language,
}: IAuthorTimelineProps) => {
  return (
    <Timeline lineColor={timelineStyles.lineColor}>
      {author[id][language].biography.map((fact: IAuthorTimelineFacts, idx) => (
        <AuthorTimelineItem key={idx} fact={fact} />
      ))}
    </Timeline>
  );
};

export default AuthorTimeline;
