import * as React from "react"
import ContentLoader from "react-content-loader"

const Loader: React.FC = () => (
    <ContentLoader
        speed={2}
        width={300}
        height={460}
        viewBox="0 0 300 460"
        backgroundColor="#f9bb9a"
        foregroundColor="rgba(255, 192, 118, 0.23)"
    >
        <rect x="8" y="4" rx="2" ry="2" width="272" height="272" />
        <rect x="12" y="298" rx="0" ry="0" width="269" height="16" />
        <rect x="13" y="334" rx="0" ry="0" width="268" height="43" />
        <rect x="16" y="407" rx="0" ry="0" width="125" height="38" />
        <rect x="159" y="405" rx="0" ry="0" width="125" height="38" />
    </ContentLoader>
)

export default Loader

