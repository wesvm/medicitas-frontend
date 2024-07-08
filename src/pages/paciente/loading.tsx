import { Skeleton } from "@/components/ui/skeleton"

export const PacienteCitasPageLoading = () => {
    return (
        <div className="p-4">
            <Skeleton className="h-96 w-full" />
        </div>
    )
}