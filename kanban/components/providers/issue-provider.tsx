'use client';
import React, { createContext, useContext } from 'react';
import { useCallback } from 'react';
import { Issue } from '@/types/issue';

interface IssueContextType {
  issues: Issue[];
  setIssues: (issues: Issue[]) => void;
  refresh: () => Promise<void>;
}
const IssueContext = createContext<IssueContextType | undefined>(undefined);

interface IssueProviderProps {
  initialIssues: Issue[];
  children: React.ReactNode;
}
export function IssueProvider({ initialIssues, children }: IssueProviderProps) {
  const [issues, setIssues] = React.useState<Issue[]>(initialIssues);
  const refresh = useCallback(async () => {
    const response = await fetch('/api/issues');
    if (!response.ok) {
      throw new Error(`載入議題失敗 (HTTP ${response.status})`);
    }
    const data = await response.json();
    setIssues(data);
  }, []);
  return (
    <IssueContext.Provider value={{ issues, setIssues, refresh }}>
      {children}
    </IssueContext.Provider>
  );
}

export function useIssue(): IssueContextType {
  const context = useContext(IssueContext);
  if (!context) {
    throw new Error('useIssue 必須在 <IssueProvider> 裡面使用');
  }
  return context;
}
