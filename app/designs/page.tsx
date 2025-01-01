import Gallery from "../components/Gallery";

import designs from "@/public/designs.json";

export default function Designs() {
    return <Gallery srcs={designs.map((design) => `/img/${design}.png`)} />;
}
