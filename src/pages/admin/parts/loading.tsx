import { Skeleton } from "@/components/ui/skeleton"

export const AdminListPageLoading = () => {
    return (
        <div className="pt-2">
            <Skeleton className="h-96 w-full rounded" />
        </div>
    )
}