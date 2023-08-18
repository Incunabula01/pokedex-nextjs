import react from "react";
type ArrowIconProps = {
    width: string;
    height: string;
}
export const ArrowIcon = ({width, height}: ArrowIconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" width={width} height={height} fill="currentColor">
        <polygon points="96.2,43.6 96.2,56.4 83.3,56.4 83.3,62.9 70.5,62.9 70.5,69.3 57.6,69.3 57.6,75.7 44.8,75.7 44.8,56.4 6.2,56.4   6.2,43.6 44.8,43.6 44.8,24.3 57.6,24.3 57.6,30.7 70.5,30.7 70.5,37.1 83.3,37.1 83.3,43.6 " />
    </svg>
)