const expertise = [
    {
        id: 0,
        title: 'Web Development & Entrepreneurship',
        desc: "As the Founder and CEO of MB WEBBER’S, I've honed my skills in full stack web development, overseeing a team and driving the company's vision forward. My journey involves creating dynamic websites and applications, seamlessly integrating front-end and back-end technologies, and ensuring robust database management. My entrepreneurial spirit and technical prowess enable me to deliver customized, high-performance web solutions that align with clients' unique needs.",
    },
    {
        id: 1,
        title: 'Mentorship & Community Building',
        desc: "Leading Code Explorer has been a fulfilling experience where I've guided over 30 students in their programming journeys. My role involves teaching, mentoring, and spearheading a Machine Learning & AI project. Through this initiative, I foster a supportive learning environment, encouraging students to explore and excel in the world of technology. My dedication to education and community building helps nurture the next generation of tech innovators.",
    },
    {
        id: 2,
        title: 'Programming Community Leadership',
        desc: "At <Dev Line Community/>, I’ve created a vibrant hub for programmers in my district. By connecting 57 like-minded individuals, we share knowledge, collaborate on projects, and push the boundaries of our technical expertise. My leadership in this community is driven by a passion for programming and a commitment to fostering growth and innovation among members.",
    },
    {
        id: 3,
        title: 'E-commerce Development',
        desc: "As the CTO of Craft Space, I've merged my technical skills with a creative touch to design and develop an e-commerce platform for handmade crafts. My responsibilities include managing payment systems, product listings, and continuous feature enhancements. This role allows me to blend technology with creativity, ensuring a seamless shopping experience for customers and a thriving online marketplace for artisans.",
    },
    {
        id: 4,
        title: 'Technical Tools & Languages',
        desc: "Proficiency in a wide range of programming languages and tools is a cornerstone of my expertise. From Python, JavaScript, and SQL to mastering frameworks like React, Angular, and Node.js, my technical arsenal is diverse and ever-growing. My familiarity with version control systems like Git and platforms like GitHub and Bitbucket ensures efficient collaboration and code management in all my projects.",
    },
    {
        id: 5,
        title: 'AI and Machine Learning',
        desc: "My journey into the world of Artificial Intelligence and Machine Learning has been both challenging and rewarding. Leading a team on various AI projects, I have developed and implemented models that solve real-world problems. My expertise in using tools like TensorFlow and OpenCV, combined with my strong foundation in mathematics and algorithms, allows me to create innovative solutions that push the boundaries of technology.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
