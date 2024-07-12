import { Card } from "@/components/card"
import { Skeleton } from "@/components/ui/skeleton"

export const DataChardLoading = () => {
    return (
        <Card className="border-none drop-shadow-sm">
            <div className="flex space-y-2 lg:space-y-0 lg:flex-row lg:items-center justify-between pb-2">
                <Skeleton className="h-8 w-24" />
                <Skeleton className="h-8 w-36" />
            </div>

            <Skeleton className="shrink-0 h-96 w-full my-2" />
        </Card>
    )
}