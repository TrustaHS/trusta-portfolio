import {AlbumList, MediaImage, SendMail, ShopFourTiles} from 'iconoir-react'

export default {
    navLinks: [
        {href: '/music', text: 'MUSIC', icon: <AlbumList />},
        {href: '/gfx', text: 'GFX', icon: <MediaImage />},
        {href: '/services', text: 'SERVICES', icon: <ShopFourTiles />},
        {href: '/contact', text: 'CONTACT', icon: <SendMail />},
    ],

    home: {
        socials: {
            text: 'SOCIALS',
            src: '/social-slot.webp',
            alt: 'social slot',
            href: 'https://linktr.ee/trustahardstyle',
            external: true,
        },

        music: {
            text: 'MUSIC',
            src: '/music/featured-release.webp',
            alt: 'featured release',
            href: '/music',
            external: false,
        },

        gfx: {text: 'GFX', href: '/gfx', external: false},
    },

    music: {
        latest: {
            src: '/music/TOP WIDE.webp',
            alt: 'horror of the deep',
            href: 'https://open.spotify.com/track/6ESjvRbyHO5kXos5beQ7VX?si=62a8f94428c14ceb',
            artist: 'TRUSTA',
            title: 'LUCID DREAMERS',
        },

        featured: [
            {
                src: '/music/BOT1.webp',
                alt: 'amnesia',
                href: 'https://open.spotify.com/album/4z3LZf32sBSP6wSqIZEk8K?si=NfTjB6YJTi-fVy_xuFA1zw',
                artist: 'TRUSTA',
                title: 'HORRORS OF THE DEEP',
            },
            {
                src: '/music/BOT2.webp',
                alt: 'dont hide',
                href: 'https://open.spotify.com/track/4txvjrPDjqNasU4w3xbsA6?si=7ec45da423da45df',
                artist: 'TRUSTA',
                title: "AMNESIA",
            },
            {
                src: '/music/BOT3.webp',
                alt: 'in the water',
                href: 'https://open.spotify.com/track/5qr7kFKp9mP95Kb1RWX238?si=ec5edd65ac3c48cb',
                artist: 'TRUSTA x FYLOH',
                title: 'DONT HIDE',
            },
            {
                src: '/music/BOT4.webp',
                alt: 'run it up',
                href: 'https://open.spotify.com/track/5kkvffjcHB1tHC0EnSZsxg?si=79d7f9e26cbd45d2',
                artist: 'TRUSTA',
                title: 'RUN IT UP',
            },
        ],
    },

    gfx: {
        gfxLogoSrc: '/gfx/trusta-gfx-logo.png',
        gfxLogoAlt: 'trusta gfx logo',

        featuredGfxImageSize: 175,
        logoImageSize: 200,

        featured: {
            left: [
                {src: '/gfx/featured/c_again.png', alt: 'come again'},
                {src: '/gfx/featured/render3.png', alt: 'judgement day'},
                {src: '/gfx/featured/givitup.png', alt: 'give it up'},
            ],

            right: [
                {src: '/gfx/featured/DUOJAG.png', alt: 'you and i'},
                {src: '/gfx/featured/LUCID.png', alt: 'lucid dreamers'},
                {src: '/gfx/featured/habbit.png', alt: 'our secret habit'},
            ],
        },

        logos: [
            {src: '/gfx/logos/LOGO1.png', alt: 'sample logo 1'},
            {src: '/gfx/logos/LOGO2.png', alt: 'sample logo 2'},
            {src: '/gfx/logos/LOGO3.png', alt: 'sample logo 3'},
            {src: '/gfx/logos/LOGO4.png', alt: 'sample logo 4'},
            {src: '/gfx/logos/LOGO5.png', alt: 'sample logo 5'},
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
            `
Hi, my name is Daniel! I'm a 24 year old guy from Sweden.
            `,
            `
I have been producing Hardstyle/Rawstyle/Hardcore since 2018. In 2024 I graduated from ”Teknikhögskolan Gothenburg” with a degree in audio engineering. Having learned from the swedish masters combined with my own journey of self teaching, I have become confident in my skills as both a producer and an engineer.
            `,
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

    contact: {
        discord: {
            src: '/contact/discord.png',
            alt: 'discord logo',
            username: 'trusta',
            size: 70,
        },

        instagram: {
            src: '/contact/instagram.png',
            alt: 'instagram logo',
            href: 'https://www.instagram.com/trusta_music/',
            size: 70,
        },

        gmail: {
            src: '/contact/gmail.png',
            alt: 'gmail logo',
            email: 'trustahs@gmail.com',
            size: 70,
        },

        tcr: {
            src: '/contact/tcr-logo.png',
            alt: 'core records logo',
            href: 'https://www.instagram.com/thecorerecords_/',
            size: 150,
        },

        aboutMe: {
            title: 'About me',
            description: [
                `
Hi, my name is Daniel! I'm a 24 year-old guy from Sweden.
                `,
                `
I have been producing Hardstyle/Rawstyle/Hardcore since
2018. In 2024, I graduated from "Teknikhögskolan
Gothenburg" with a degree in audio engineering. Having
learned from the Swedish masters combined with my own
journey of self teaching, I have become confident in my
skills as both a producer and an engineer.
                `,
                `
Apart from that I also do graphic design. I produce all
of my own artworks and I am also a dedicated designer
and co-owner of "The Core Records" label.
                `,
            ],
        },
    },
}
