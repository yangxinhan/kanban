'use client'
import React, { createContext, useContext } from 'react';
import { Issue } from '@/types/issue';

interface IssueContextType {
    issues: Issue[];
}
const IssueContext = createContext<IssueContextType | undefined>(undefined);
export function IssueProvider({ children }: { children: React.ReactNode }) {
    const issues = [
    {
        id: '1',
        title: '任務一',
        description: '敘述一',
        status: 'todo',
        },
    ];

    return (
    <IssueContext.Provider value={{ issues }}>
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