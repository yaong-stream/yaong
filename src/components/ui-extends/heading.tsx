import { FC, PropsWithChildren } from "react";


type HeadingProps = PropsWithChildren<{
    className?: string;
}>;


const H1: FC<HeadingProps> = ({ children, ...props }) => {
    return (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl" {...props}>
            {children}
        </h1>
    );
};


const H2: FC<HeadingProps> = ({ children, ...props }) => {
    return (
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0" {...props}>
            {children}
        </h2>
    );
};


const H3: FC<HeadingProps> = ({ children, ...props }) => {
    return (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight" {...props}>
            {children}
        </h3>
    );
};



const H4: FC<HeadingProps> = ({ children, ...props }) => {
    return (
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight" {...props}>
            {children}
        </h4>
    );
};

const H5: FC<HeadingProps> = ({ children, ...props }) => {
    return (
        <h5 className="scroll-m-20 text-sm font-semibold tracking-tight" {...props}>
            {children}
        </h5>
    );
};


export { H1, H2, H3, H4, H5 };