'use client';

import { Input } from "@/components/ui/input";
import {
    autoUpdate,
    flip,
    FloatingFocusManager,
    FloatingPortal,
    size,
    useDismiss,
    useFloating,
    useId,
    useInteractions,
    useListNavigation,
    useRole
} from "@floating-ui/react";
import { forwardRef, HTMLProps, useRef, useState, KeyboardEvent } from "react";

interface ItemProps {
    children: React.ReactNode;
    active: boolean;
}

const Item = forwardRef<
    HTMLDivElement,
    ItemProps & HTMLProps<HTMLDivElement>
>(({ children, active, ...rest }, ref) => {
    const id = useId();
    return (
        <li
            ref={ref}
            role="option"
            id={id}
            aria-selected={active}
            {...rest}
            style={{
                background: active ? "lightblue" : "none",
                padding: 4,
                cursor: "default",
                ...rest.style
            }}
        >
            {children}
        </li>
    );
});

Item.displayName = 'item';


interface AutoCompleteInputProps {
    data?: string[];
    onSelect?: (data: string) => void;
    onClose?: () => void;
}


const AutoCompleteInput = ({ data, onSelect }: AutoCompleteInputProps) => {
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const listRef = useRef<Array<HTMLElement | null>>([]);

    const { context, refs, floatingStyles } = useFloating({
        whileElementsMounted: autoUpdate,
        open,
        onOpenChange: setOpen,
        middleware: [
            flip({ padding: 10 }),
            size({
                apply({ rects, availableHeight, elements }) {
                    Object.assign(elements.floating.style, {
                        width: `${rects.reference.width}px`,
                        maxHeight: `${availableHeight}px`
                    });
                },
                padding: 10
            })
        ]
    });

    const role = useRole(context, { role: "listbox" });
    const dismiss = useDismiss(context);
    const listNav = useListNavigation(context, {
        listRef,
        activeIndex,
        onNavigate: setActiveIndex,
        virtual: true,
        loop: true
    });

    const {
        getReferenceProps,
        getFloatingProps,
        getItemProps
    } = useInteractions([role, dismiss, listNav]);

    function onChange(event: React.ChangeEvent<HTMLInputElement>) {
        event.stopPropagation();
        const value = event.target.value;
        setInputValue(value);

        if (value) {
            setOpen(true);
            setActiveIndex(0);
        } else {
            setOpen(false);
        }
    }

    const items = data?.filter((item: string) =>
        item.toLowerCase().startsWith(inputValue.toLowerCase())
    );


    return (

        <div>

            <Input type="text"

                {...getReferenceProps({
                    ref: refs.setReference,
                    onChange,
                    value: inputValue,
                    placeholder: "Enter fruit",
                    "aria-autocomplete": "list",
                    onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => {

                        event.stopPropagation();
                        // 제안 목록을 선택시
                        if (
                            event.key === "Enter"

                        ) {
                            if (activeIndex != null &&
                                items?.[activeIndex]) {
                                onSelect?.(items?.[activeIndex]);
                                setInputValue('');
                                setActiveIndex(null);
                                setOpen(false);
                            } else {
                                onSelect?.(event?.target?.value || '');
                                setInputValue('');
                                setActiveIndex(null);
                                setOpen(false);
                            }


                        }
                    }
                })}

            />

            <FloatingPortal>
                {open && (
                    <FloatingFocusManager
                        context={context}
                        initialFocus={-1}
                        visuallyHiddenDismiss
                    >
                        <ul
                            {...getFloatingProps({
                                ref: refs.setFloating,
                                style: {
                                    ...floatingStyles,
                                    background: "#eee",
                                    color: "black",
                                    overflowY: "auto"
                                }
                            })}
                        >
                            {items?.map((item, index) => (
                                <Item
                                    {...getItemProps({
                                        key: item,
                                        ref: (node) => {
                                            listRef.current[index] = node;
                                        },
                                        onClick: () => {
                                            onSelect?.(item);

                                            setInputValue('');
                                            setOpen(false);
                                            refs.domReference.current?.focus();
                                        }
                                    })
                                    }
                                    key={item}
                                    active={activeIndex === index}
                                >
                                    {item}
                                </Item>
                            ))}
                        </ul>
                    </FloatingFocusManager>
                )}
            </FloatingPortal>
        </div>
    );
};


export { AutoCompleteInput };
