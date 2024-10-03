import { FC, PropsWithChildren } from "react";



type ParagraphProps = PropsWithChildren<{
    className?: string;
}>;



const Paragraph: FC<ParagraphProps> = ({ children, ...props }) => {
    return (
        <p className="leading-7 [&:not(:first-child)]:mt-6" {...props}>
            {children}
        </p>
    );
};

export { Paragraph };