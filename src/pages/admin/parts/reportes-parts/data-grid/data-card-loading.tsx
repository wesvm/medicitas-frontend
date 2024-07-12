import { Card } from "@/components/card"
import { Skeleton } from "@/components/ui/skeleton"

export const DataCardLoading = () => {
    return (
        <Card className="border-none drop-shadow-sm h-32">
            <div className="flex flex-row items-center justify-between gap-x-4">
                <div className="space-y-2">
                    <Skeleton className="h-8 w-24" />
                    <Skeleton className="h-4 w-40" />
                </div>
                <Skeleton className="size-12" />
            </div>

            <Skeleton className=" shrink-0 h-10 w-24 my-2" />
        </Card>
    )
}