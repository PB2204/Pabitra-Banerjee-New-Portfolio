const review = [
    {
        id: 0,
        clientName: 'Amaresh Dutta',
        clientLocation: 'Manbazar, Purulia, India',
        clientSource: 'News Website',
        clientReview: 'Collaborating with Pabitra was an absolute delight. His dedication to our project was evident from the get-go. Not only did he complete the work ahead of schedule, but his insights and suggestions also elevated the final product. Pabitra\'s expertise in web development shines through in every aspect of his work. We are excited about future projects together.'
    },
    {
        id: 1,
        clientName: 'Subhajit Ghosh',
        clientLocation: 'Jayrambati, Bankura, India',
        clientSource: 'Restaurant Website',
        clientReview: 'Pabitra is a communication wizard and a seasoned developer. His ability to understand our requirements and translate them into a functional website was impressive. Working with him was a seamless experience, and we are thrilled with the outcome.'
    },
    {
        id: 2,
        clientName: 'Arijit Banerjee',
        clientLocation: 'Ranchi, Jharkhand, India',
        clientSource: 'Freelance',
        clientReview: 'Pabitra’s knowledge and expertise in web app development are unparalleled. He has a deep understanding of various technologies and frameworks, which is truly commendable. His guidance and execution were instrumental in the success of our project. I look forward to the opportunity to collaborate with him again.'
    },
    {
        id: 3,
        clientName: 'Sayan Chakraborty',
        clientLocation: 'Purulia, West Bengal, India',
        clientSource: 'Freelance',
        clientReview: 'Working with Pabitra was a professional and rewarding experience. His speed and quality of work are exceptional, and he consistently delivers more than expected. His approach to software development is both innovative and efficient. Highly recommended!'
    },
    {
        id: 4,
        clientName: 'Ankita Sharma',
        clientLocation: 'Kolkata, West Bengal, India',
        clientSource: 'Freelance',
        clientReview: 'Pabitra is not just a developer; he is a visionary. His ability to see the bigger picture and execute with precision is remarkable. He brought our project to life with his creative solutions and technical prowess. Collaborating with him was a transformative experience, and I am eager for our next venture together.'
    },
    {
        id: 5,
        clientName: 'Mustafash',
        clientLocation: 'Cairo, Egypt',
        clientSource: 'Fiverr',
        clientReview: 'It is always nice to work with him. The work is finished quickly and he does more than is asked of him. It is also clear that he has a lot of knowledge of the work he does. I look forward to our next collaboration.'
    },
    {
        id: 6,
        clientName: 'Melissabrown255',
        clientLocation: 'New York, United States',
        clientSource: 'Fiverr',
        clientReview: 'He is very good with communication and experienced website developer, great experience to work with him.'
    },
    {
        id: 7,
        clientName: 'Jake Corry',
        clientLocation: 'Berlin, Germany',
        clientSource: 'Fiverr',
        clientReview: "Pabitra is extremely knowledgeable and helpful. He knows in and out of web app development. His understanding of different technologies and frameworks in the space is also very impressive. I hope I get the chance to work with him again."
    },
    {
        id: 8,
        clientName: 'Blaise Labriola',
        clientLocation: 'Paris, France',
        clientSource: 'Fiverr',
        clientReview: 'I have worked with Pabitra and he is a very professional and excellent software developer. I admire his speed of development and quality of work when given an assignment.'
    },
    {
        id: 9,
        clientName: 'Chen Wei',
        clientLocation: 'Beijing, China',
        clientSource: 'Upwork',
        clientReview: 'Pabitra’s expertise in web development is exceptional. He delivered high-quality work, meeting all our specifications and deadlines. His professionalism and attention to detail make him a standout developer. I look forward to collaborating with him on future projects.'
    }
]

export default function handler(req, res) {
    res.status(200).json(review)
}
