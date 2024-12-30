import "./Portrait.css";

type Props = {
    src: string;
};
export default function Portrait({ src }: Props) {
    return (
        <img
            src={src}
            style={{ animation: "slideIn 250ms ease-out" }}
            className="w-52"
        />
    );
}
