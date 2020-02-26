import React from 'react';
import { Table } from 'react-bootstrap';
import AuthorWorksItem from '../AuthorWorksItem';
import { useTranslation } from 'react-i18next';

interface IAuthorWorksList {
  endAt: string | null;
  startAt: string;
  genre: string;
  title: string;
}

interface IAuthorWorksProps {
  worksList: [];
}

const AuthorWorks: React.FC<IAuthorWorksProps> = ({ worksList }) => {
  const { t } = useTranslation();

  return (
    <Table striped bordered hover size="md">
      <thead>
        <tr>
          <th>{t('date')}</th>
          <th>{t('genre')}</th>
          <th>{t('workTitle')}</th>
        </tr>
      </thead>
      <tbody>
        {worksList.map((item: IAuthorWorksList, index) => {
          return <AuthorWorksItem work={item} index={index} key={index} />;
        })}
      </tbody>
    </Table>
  );
};

export default AuthorWorks;
