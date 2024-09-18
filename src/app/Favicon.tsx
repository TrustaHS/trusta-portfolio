interface FaviconProps {
    path: string
}

const Favicon: React.FC<FaviconProps> = ({path}) => (
    <>
        <link
            rel='apple-touch-icon'
            sizes='180x180'
            href={`${path}/apple-touch-icon.png`}
        />
        <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href={`${path}/favicon-32x32.png`}
        />
        <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href={`${path}/favicon-16x16.png`}
        />
        <link rel='manifest' href={`${path}/site.webmanifest`} />
        <link
            rel='mask-icon'
            href={`${path}/safari-pinned-tab.svg`}
            color='#16a34a'
        />
        <link rel='shortcut icon' href={`${path}/favicon.ico`} />
        <meta name='msapplication-TileColor' content='#00a300' />
        <meta
            name='msapplication-config'
            content={`${path}/browserconfig.xml`}
        />
        <meta name='theme-color' content='#ffffff' />
    </>
)

export default Favicon
