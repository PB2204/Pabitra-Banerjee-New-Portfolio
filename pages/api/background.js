const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Manbazar Radha Madhab Institution',
                degree: 'Secondary Examination',
                detail: "Completed my Secondary Examination with an impressive score of 599 out of 700, achieving an 85.57% aggregate. This foundational education ignited my passion for technology and laid the groundwork for my future academic pursuits.",
                year: '2019'
            },
            {
                id: 1,
                title: 'Manbazar Radha Madhab Institution',
                degree: 'Higher Secondary Examination',
                detail: "Graduated with a Higher Secondary Examination degree, securing 418 out of 500 marks, equivalent to an 83.60% aggregate. These years honed my analytical skills and solidified my interest in engineering and technology.",
                year: '2021'
            },
            {
                id: 2,
                title: 'Bikramjeet Goswami Memorial College',
                degree: "B.Sc. in Mathematics",
                detail: "Embarked on a rigorous journey in the field of Mathematics, achieving a CGPA of 9.3 out of 10 in the first year. This academic pursuit was instrumental in sharpening my problem-solving abilities and deepening my understanding of complex mathematical concepts.",
                year: '2021-2022'
            },
            {
                id: 3,
                title: 'Manbhum Mahavidyalaya',
                degree: 'B.Sc. in Computer Science',
                detail: "Currently advancing my knowledge in Computer Science, focusing on areas like algorithms, data structures, and software development. This ongoing academic experience is equipping me with the technical expertise required to excel in the tech industry.",
                year: '2024 - Present'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'MB WEBBER’S',
                role: 'Founder and CEO',
                url: 'https://mbwebbers.tech',
                desc: "Leading a web development start-up, overseeing vision, strategic decisions, operations, growth, and success.",
                year: '06/2022 - Present',
                location: 'Manbazar, Purulia'
            },
            {
                id: 2,
                title: 'Code Explorer',
                role: 'Founder and CEO',
                url: 'https://explorecode.live',
                desc: "Encouraging students to learn programming, teaching over 30 students for free, and leading a team on a Machine Learning & AI project.",
                year: '08/2022 - Present',
                location: 'Manbazar, Purulia'
            },
            {
                id: 3,
                title: '<Dev Line Community/>',
                role: 'Founder and CEO',
                url: 'https://devlinecommunity.wixsite.com/dev-line-community',
                desc: "Building a programming community, reaching 57 programmers in the home district.",
                year: '10/2022 - Present',
                location: 'Manbazar, Purulia'
            },
            {
                id: 4,
                title: 'Craft Space',
                role: 'CTO',
                url: 'https://www.craftspace.in',
                desc: "Designing and developing an e-commerce website for handmade crafts, managing payments, products, and developing new features.",
                year: '02/2023 - Present',
                location: 'Kamarpukur, Hooghly'
            },
        ]
    }
]

export default function handler(req, res) {
    res.status(200).json(background)
}
