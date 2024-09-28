import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils"
import { Cross2Icon } from "@radix-ui/react-icons";

const chipVariants = cva(
    "inline-flex items-center gap-2 rounded-full overflow-hidden border px-2.5 py-1 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
                outline: "text-foreground",
            },
            size: {
                default: "h-9 px-4 py-2",
                sm: "h-8 px-3 text-xs",
                lg: "h-10 px-8",
                icon: "h-9 w-9",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    },
);

export interface ChipProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chipVariants> {
    label: string;
    onDelete?: (label: string) => string;
    disabled?: boolean;
}

const Chip = ({
    className
    , variant
    , label
    , size
    , disabled
    , onDelete, ...props }: ChipProps) => {

    const isDeletable = onDelete;
    return (
        <div aria-disabled={disabled} className={cn(chipVariants({ variant, size }), className)}  {...props}>
            <span className="overflow-hidden text-ellipsis whitespace-nowrap">{label}</span>
            {
                isDeletable &&
                <span className="rounded-full cursor-pointer bg-gray-700 p-1.5">
                    <Cross2Icon onClick={() => onDelete(label)} />
                </span>
            }

        </div>
    );
}


export { Chip, chipVariants };;