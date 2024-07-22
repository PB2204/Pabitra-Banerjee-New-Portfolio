// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Subham Goel',
    image: "images/subham.jpeg",
    designation: 'Senior Software Engineer @ Amazon',
    view: "I have had the pleasure of working with Pabitra Banerjee on several web development projects. His expertise in full-stack development and dedication to delivering high-quality code have always impressed me. Pabitra's enthusiasm for tackling new challenges and his ability to learn quickly make him an invaluable asset to any team.",
    linkednURL: "https://www.linkedin.com/in/goelshub/"
  },
  {
    id: 1,
    name: 'Kritika Rupauliha',
    image: "images/kritika.jpeg",
    designation: 'Machine Learning Engineer @ Microsoft',
    view: "Pabitra's work in AI and machine learning is truly outstanding. We collaborated on a deep learning project, and his proficiency in Python and TensorFlow was evident throughout. His attention to detail and problem-solving skills make him a top-notch professional in his field.",
    linkednURL: "https://www.linkedin.com/in/kritika-rupauliha/"
  },
  {
    id: 2,
    name: 'Mahima Mehta',
    image: "images/mahima.jpeg",
    designation: 'Trust and Safety @ LinkedIn',
    view: "Pabitra Banerjee is a visionary leader with exceptional skills in web development and AI. As the Founder & CEO of MB WEBBER'S, his strategic direction and technical expertise have driven the company's growth. His ability to manage complex projects and deliver scalable solutions is commendable.",
    linkednURL: "https://www.linkedin.com/in/mahima-mehta/"
  },
  {
    id: 3,
    name: 'Ishita Goel',
    image: "images/ishita.jpeg",
    designation: 'Software Engineer @ Google',
    view: "I highly recommend Pabitra for his remarkable skills in front-end development and UI/UX design. His proficiency in React, Angular, and other technologies enables him to create seamless and user-friendly web applications. Pabitra's dedication to his craft and his ability to collaborate effectively with team members make him an excellent addition to any project.",
    linkednURL: "https://www.linkedin.com/in/ishita-goyal-7393a3169/"
  },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
