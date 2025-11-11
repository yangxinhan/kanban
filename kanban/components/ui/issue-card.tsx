'use client'
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Issue } from "@/types/issue";

interface IssueCardProps {
    issue: Issue;
}
export function IssueCard({ issue }: IssueCardProps) {
    const router = useRouter();
    return (
    <Card onClick={() => router.push(`/issues/${issue.id}`)}>
        <CardHeader>
            <CardTitle>{issue.title}!</CardTitle>
            <CardDescription className="line-clamp-3 text-ellipsis">
                {issue.description}
            </CardDescription>
        </CardHeader>
    </Card>
);
}