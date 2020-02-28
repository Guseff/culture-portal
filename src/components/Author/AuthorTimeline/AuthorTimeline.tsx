import './index.scss';

import React from 'react';
import { Timeline } from 'vertical-timeline-component-for-react';
import AuthorTimelineItem from '../AuthorTimelineItem';
import { useTranslation } from 'react-i18next';

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
  lineColor: '#663036',
};

const AuthorTimeline: React.FC<IAuthorTimelineProps> = ({
  id,
  author,
  language,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <h4 className="timeline-title">{t('biography')}</h4>
      <Timeline lineColor={timelineStyles.lineColor}>
        {author[id][language].biography.map(
          (fact: IAuthorTimelineFacts, idx) => (
            <AuthorTimelineItem key={idx} fact={fact} />
          )
        )}
      </Timeline>
    </>
  );
};

export default AuthorTimeline;
