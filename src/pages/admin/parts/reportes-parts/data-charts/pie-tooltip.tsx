import { Separator } from "@/components/ui/separator";

export const PieTooltip = ({ active, payload }: any) => {
    if (!active) return null;

    const name = payload[0].payload.nombre;
    const value = payload[0].payload.total;

    return (
        <div className="rounded-sm bg-white shadow-sm border overflow-hidden">
            <div className="text-sm p-2 px-3 bg-muted text-muted-foreground">
                {name}
            </div>
            <Separator />
            <div className="p-2 px-3 space-y-1">
                <div className="flex items-center gap-x-2">
                    <div className="size-1.5 bg-red-500 rounded-full" />
                    <p className="test-sm text-muted-foreground">
                        Especialidad
                    </p>
                    <p className="text-sm text-right font-medium">
                        {value}
                    </p>
                </div>
            </div>
        </div>
    )
}