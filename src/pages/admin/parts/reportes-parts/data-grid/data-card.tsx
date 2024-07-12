import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority";

import { Card } from "@/components/card";
import { CountUp } from "@/components/count-up";

const boxVariant = cva(
    "rounded-md p-3",
    {
        variants: {
            variant: {
                default: "bg-blue-500/20",
                success: "bg-emerald-500/20",
                danger: "bg-rose-500/20",
                warning: "bg-yellow-500/20"
            }
        },
        defaultVariants: {
            variant: "default",
        }
    }
)

const iconVariant = cva(
    "size-6",
    {
        variants: {
            variant: {
                default: "fill-blue-500",
                success: "fill-emerald-500",
                danger: "fill-rose-500",
                warning: "fill-yellow-500"
            }
        },
        defaultVariants: {
            variant: "default",
        }
    }
)

type BoxVariants = VariantProps<typeof boxVariant>;
type IconVariants = VariantProps<typeof iconVariant>;

interface DataCardProps extends BoxVariants, IconVariants {
    icon: React.ElementType<React.SVGProps<SVGSVGElement>>;
    title: string;
    value?: number;
    dateRange: string;
}

export const DataCard = ({
    icon: Icon,
    title,
    value = 0,
    dateRange,
    variant
}: DataCardProps) => {
    return (
        <Card className="border-none drop-shadow-sm">
            <div className="flex flex-row items-center justify-between gap-x-4">
                <header className="space-y-2">
                    <h1 className="font-bold text-2xl">{title}</h1>
                    <span className="text-sm">{dateRange}</span>
                </header>

                <div className={cn(boxVariant({ variant }))}>
                    <Icon className={iconVariant({ variant })} />
                </div>
            </div>
            <div>
                <h1 className="font-bold text-2xl mb-2 line-clamp-1 break-all">
                    <CountUp
                        preserveValue
                        start={0}
                        end={value}
                    />
                </h1>
            </div>
        </Card>
    )
}