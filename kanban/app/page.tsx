'use client';
import { Button } from '@/components/ui/button';
import { StatusColumn } from '@/components/ui/status-column';
import { useIssue } from '@/components/providers/issue-provider';

export default function Home() {
  const { refresh } = useIssue();
  const onClick = () => refresh();
  return (
    <div className="flex flex-col gap-4 p-16">
      <div className="flex">
        <Button onClick={onClick}>重新整理!</Button>
      </div>
      <div className="grid grid-cols-4 gap-4 ">
        <StatusColumn title="還沒做" status="todo" />
        <StatusColumn title="正在做" status="doing" />
        <StatusColumn title="做完了" status="done" />
        <StatusColumn title="放棄" status="closed" />
      </div>
    </div>
  );
}
