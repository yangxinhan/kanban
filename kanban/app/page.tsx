import { StatusColumn } from '@/components/ui/status-column';
export default function Home() {
  return (
    <div className="p-8 grid grid-cols-4 gap-4">
      <StatusColumn status="todo" title="📝 還沒做" />
      <StatusColumn status="doing" title="🚧 正在做" />
      <StatusColumn status="done" title="✅ 做完了" />
      <StatusColumn status="closed" title="📦 放棄" />
    </div>
  );
}
