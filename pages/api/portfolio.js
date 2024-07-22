const portfolio = [
    {
        id: 0,
        projectName: "Interstellar Armada",
        url: "https://pabitrabanerjee.me/Interstellar-Armada/",
        image: "images/intersteller-armada.png",
        projectDetail: "Embark on an intergalactic journey with Interstellar Armada: Galactic Ace, a free, open-source 3D space combat simulator. Crafted meticulously in JavaScript and WebGL, this browser-based game offers players a thrilling experience of navigating the cosmos and engaging in epic space battles. Developed by Pabitra Banerjee, Interstellar Armada is a testament to the potential of web technologies in creating immersive gaming experiences.",
        technologiesUsed: [
            { tech: "JavaScript" },
            { tech: "WebGL" }
        ]
    },
    {
        id: 1,
        projectName: "Sunday",
        url: "https://sunday-inky.vercel.app/",
        image: "images/sunday.png",
        projectDetail: "Sunday is your responsive chatbot companion designed for Chrome and the web. Utilizing RESTful API calls to Wikipedia's vast repositories, Sunday brings a wealth of knowledge to your fingertips. This intuitive app is perfect for users seeking quick, reliable information in a conversational format.",
        technologiesUsed: [
            { tech: "Chrome" },
            { tech: "Web" },
            { tech: "REST API" }
        ]
    },
    {
        id: 2,
        projectName: "Stack-Overflow Front-End",
        url: "https://pabitrabanerjee.me/Stack-OverFlow/",
        image: "images/stack-overflow.png",
        projectDetail: "Dive into the world of coding communities with the Stack-Overflow Front-End project. Developed using HTML, CSS, and JavaScript, this project boasts a responsive design and interactive elements, providing users with an engaging and user-friendly interface. This front-end revamp ensures a seamless experience for developers interacting with one of the most popular coding platforms.",
        technologiesUsed: [
            { tech: "HTML" },
            { tech: "CSS" },
            { tech: "JavaScript" }
        ]
    },
    {
        id: 3,
        projectName: "PyConda Programming Language",
        url: "https://pyconda.pabitrabanerjee.me/",
        image: "images/pyconda-website.jpg",
        projectDetail: "Introducing PyConda, a new programming language based on Python, designed for simplicity and extensibility. PyConda allows developers to write and execute code in an intuitive manner, making it accessible for both beginners and experienced programmers. This language embodies the ethos of Python while offering unique features to enhance coding efficiency.",
        technologiesUsed: [
            { tech: "Python" }
        ]
    },
    {
        id: 4,
        projectName: "Free VPN Finder",
        url: "https://microsoftedge.microsoft.com/addons/detail/free-vpn-server-finder/fkbjnmkkgoelcbbaiabaihimjpfbifkp",
        image: "images/free-vpn-finder.png",
        projectDetail: "Navigate the web securely with the Free VPN Finder extension for Microsoft Edge. Developed using JavaScript, HTML, and CSS, this extension integrates seamlessly with your browser, providing users with easy access to reliable VPN services. Protect your online privacy and explore the internet without restrictions.",
        technologiesUsed: [
            { tech: "JavaScript" },
            { tech: "HTML" },
            { tech: "CSS" }
        ]
    },
    {
        id: 5,
        projectName: "IDX Dark Theme",
        url: "https://marketplace.visualstudio.com/items?itemName=PabitraBanerjee.idx-dark-theme",
        image: "images/idx-dark-theme.png",
        projectDetail: "Enhance your coding environment with the IDX Dark Theme for Visual Studio Code. Inspired by Google's IDX design, this theme features vibrant colors and a thoughtful layout, making coding sessions more pleasant and productive. With over 2.8k downloads, the IDX Dark Theme is a favorite among developers seeking both aesthetics and functionality.",
        technologiesUsed: [
            { tech: "Visual Studio Code" },
            { tech: "Theme Design" }
        ]
    },
    {
        id: 6,
        projectName: "Structure of Carbon Atom",
        url: "https://pabitrabanerjee.me/Structure-Of-Carbon-Atom/",
        image: "images/carbon-atom.png",
        projectDetail: "Explore the intricacies of atomic structures with the Structure of Carbon Atom web view. Using HTML, CSS, and JavaScript, this project visually represents the components of a carbon atom, offering an educational and interactive experience for users. Perfect for students and enthusiasts alike, this project makes learning about chemistry engaging and accessible.",
        technologiesUsed: [
            { tech: "HTML" },
            { tech: "CSS" },
            { tech: "JavaScript" }
        ]
    },
    {
        id: 7,
        projectName: "Web Browser",
        url: "https://pabitrabanerjee.me/Web-Browser/",
        image: "images/web-browser.png",
        projectDetail: "Experience a sleek and fully functional web browser developed with HTML, CSS, and JavaScript. This project features a modern design, seamless navigation, and essential browsing tools, providing users with an optimal web browsing experience. It showcases the versatility of web technologies in creating robust applications.",
        technologiesUsed: [
            { tech: "HTML" },
            { tech: "CSS" },
            { tech: "JavaScript" }
        ]
    },
    {
        id: 8,
        projectName: "Clash Of Space",
        url: "https://pabitrabanerjee.me/Clash-Of-Space/",
        image: "images/clash-of-space.png",
        projectDetail: "Clash Of Space is an engaging clone of the popular Radius Raid game from js13kGames. Developed using HTML5, CSS, and JavaScript, this desktop-only game offers players an exciting space craft shooting experience. Perfect for gaming enthusiasts, Clash Of Space combines classic gameplay with modern web technologies.",
        technologiesUsed: [
            { tech: "HTML5" },
            { tech: "CSS" },
            { tech: "JavaScript" }
        ]
    },
    {
        id: 9,
        projectName: "Professional Portfolio",
        url: "https://pabitrabanerjee.netlify.app",
        image: "images/professional-portfolio.png",
        projectDetail: "Pabitra Banerjee is a Full-Stack AI Engineer with some knowledge of Blockchain Technology and a tech enthusiast. He is the Founder & CEO of MB WEBBER'S, a Software Development company based in Manbazar, Purulia, West Bengal.",
        technologiesUsed: [
            { tech: "HTML5" },
            { tech: "CSS" },
            { tech: "JavaScript" },
            { tech: "React" }
        ]
    }
];
export default function handler(req, res) {
    res.status(200).json(portfolio);
}
