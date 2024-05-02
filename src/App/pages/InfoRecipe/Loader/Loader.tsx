import * as React from "react"
import ContentLoader from "react-content-loader"

const Loader: React.FC = () => (
    <ContentLoader
        speed={2}
        width={1000}
        height={460}
        viewBox="0 0 1000 460"
        backgroundColor="#f9bb9a"
        foregroundColor="rgba(255, 192, 118, 0.23)"
    >
        <rect x="14" y="101" rx="2" ry="2" width="272" height="272" />
        <rect x="526" y="187" rx="0" ry="0" width="125" height="38" />
        <rect x="525" y="263" rx="0" ry="0" width="125" height="38" />
        <rect x="677" y="187" rx="0" ry="0" width="125" height="38" />
        <rect x="676" y="263" rx="0" ry="0" width="125" height="38" />
        <rect x="193" y="486" rx="0" ry="0" width="1" height="0" />
        <rect x="177" y="486" rx="0" ry="0" width="2" height="1" />
    </ContentLoader>
)

export default Loader

