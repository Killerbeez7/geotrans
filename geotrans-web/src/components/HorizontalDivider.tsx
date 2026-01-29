type Props = {
    margin?: number;
    extend?: number;
};

export const HorizontalDivider = ({ margin = 0, extend = 0 }: Props) => {
    const widthStyle = extend ? `calc(100% + ${extend}%)` : "100%";
    const transformStyle = extend ? `translateX(-${extend / 2}%)` : undefined;

    return (
        <div
            className="h-px"
            style={{
                display: "block",
                margin: `${margin}px auto`,
                width: widthStyle,
                transform: transformStyle,
                background:
                    "linear-gradient(to right, rgba(156, 163, 175, 0.2), rgba(156, 163, 175, 0.8), rgba(156, 163, 175, 0.2))",
                boxSizing: "border-box",
            }}
        />
    );
};
