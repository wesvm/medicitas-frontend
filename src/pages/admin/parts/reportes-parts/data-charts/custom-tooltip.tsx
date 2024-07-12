import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";

export const CustomTooltip = ({ active, payload }: any) => {
    if (!active) return null;

    const date = payload[0].payload.dia;
    const odontologia = payload[0].payload.odontologia;
    const psicologia = payload[0].payload.psicologia;

    return (
        <div className="rounded-sm bg-white shadow-sm border overflow-hidden">
            <div className="text-sm p-2 px-3 bg-muted text-muted-foreground">
                {format(date, "MMM dd, yyyy")}
            </div>
            <Separator />
            <div className="p-2 px-3 space-y-1">
                <div className="flex items-center gap-x-2">
                    <div className="size-1.5 bg-blue-500 rounded-full" />
                    <p className="test-sm text-muted-foreground">
                        Odontologia
                    </p>
                    <p className="text-sm text-right font-medium">
                        {odontologia}
                    </p>
                </div>

                <div className="flex items-center gap-x-2">
                    <div className="size-1.5 bg-red-500 rounded-full" />
                    <p className="test-sm text-muted-foreground">
                        Psicologia
                    </p>
                    <p className="text-sm text-right font-medium">
                        {psicologia}
                    </p>
                </div>
            </div>
        </div>
    )
}