'use client';
import { is } from 'date-fns/locale';

import { useIssue } from '@/components/providers/issue-provider';

import { IssueCard } from './issue-card';

interface StatusColumnProps {
  title: string;
  status: string;
}

export function StatusColumn({ title, status }: StatusColumnProps) {
  const { issues } = useIssue();

  const children = issues
    .filter((issue) => issue.status === status)
    .map((issue) => (
      <IssueCard key={issue.id} issue={issue} />
    ));
  return (
    <section>
      <h1>
        {title}
        !
      </h1>
      {children}
    </section>
  );
}
