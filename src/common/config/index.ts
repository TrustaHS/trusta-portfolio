export default {
    navLinks: [
        {href: '/music', text: 'MUSIC'},
        {href: '/gfx', text: 'GFX'},
        {href: '/services', text: 'SERVICES'},
        {href: '/contact', text: 'CONTACT'},
    ],

    imageUrls: {
        music: '/music',

        gfx: {
            featured: '/gfx/featured',
            logos: '/gfx/logos',
        },
    },

    home: {
        socials: {
            text: 'SOCIALS',
            src: '/hero.png',
            alt: 'hero',
            href: 'https://linktr.ee/trustahardstyle',
            external: true,
        },

        music: {
            text: 'MUSIC',
            src: '/featured-release.png',
            alt: 'featured release',
            href: '/music',
            external: false,
        },

        gfx: {text: 'GFX', href: '/gfx', external: false},
    },

    gfx: {
        featuredGfxImageSize: 175,
        logoImageSize: 200,

        featured: {
            left: [
                {src: '/c_again.png', alt: 'come again'},
                {src: '/render3.png', alt: 'judgement day'},
                {src: '/givitup.png', alt: 'give it up'},
            ],

            right: [
                {src: '/DUOJAG.png', alt: 'you and i'},
                {src: '/LUCID.png', alt: 'lucid dreamers'},
                {src: '/habbit.png', alt: 'our secret habit'},
            ],
        },

        logos: [
            {src: '/LOGO1.png', alt: 'sample logo 1'},
            {src: '/LOGO2.png', alt: 'sample logo 2'},
            {src: '/LOGO3.png', alt: 'sample logo 3'},
            {src: '/LOGO4.png', alt: 'sample logo 4'},
            {src: '/LOGO5.png', alt: 'sample logo 5'},
        ],
    },

    music: {
        latestImageSize: 350,
        featuredImageSize: 250,

        latest: {
            src: '/TOP WIDE.png',
            alt: 'horror of the deep',
            href: 'https://open.spotify.com/album/4z3LZf32sBSP6wSqIZEk8K?si=LWhEnaBUSBGrBzXfaKWiNA',
            artist: 'TRUSTA',
            title: 'HORRORS OF THE DEEP',
        },

        featured: [
            {
                src: '/BOT1.png',
                alt: 'amnesia',
                href: 'https://open.spotify.com/track/3j3G4iwRjdxyPZu78I5ywK?si=42266328794d4ab6',
            },
            {
                src: '/BOT2.png',
                alt: 'dont hide',
                href: 'https://open.spotify.com/track/5qr7kFKp9mP95Kb1RWX238?si=48a76ecbc9db48b4',
            },
            {
                src: '/BOT3.png',
                alt: 'in the water',
                href: 'https://open.spotify.com/track/4KH5oVB2BvjrZ9zkHXglar?si=553cc2ab84264de1',
            },
            {
                src: '/BOT4.png',
                alt: 'run it up',
                href: 'https://open.spotify.com/track/5kkvffjcHB1tHC0EnSZsxg?si=79d7f9e26cbd45d2',
            },
        ],
    },

    services: {
        title: 'SERVICES',
        profileSrc: '/trusta-pfp.png',
        profileAlt: 'trusta pfp',
        sectionIconSrc: '/trusta-icon.png',
        sectionIconAlt: 'trusta icon',
        tags: ['Hardstyle', 'Rawstyle', 'Hardcore'],

        description: [
            "Hi, my name is Daniel! I'm a 24 year old guy from Sweden.",
            'I have been producing Hardstyle/Rawstyle/Hardcore since 2018. In 2024 I graduated from ”Teknikhögskolan Gothenburg” with a degree in audio engineering. Having learned from the swedish masters combined with my own journey of self teaching, I have become confident in my skills as both a producer and an engineer.',
        ],

        sections: [
            {
                title: 'MIXING/MASTERING',
                items: [
                    'Make your track more cohesive',
                    'Achieve great loudness',
                ],
            },
            {
                title: 'PRODUCTION',
                items: ['Kicks', 'Melodies', 'Intros/breaks (track starters)'],
            },
        ],
    },
}
