import {useState} from "react";
import {Mic, PlayCircle, FileText, MapPin, Newspaper, Menu, X, Brain, Gavel} from "lucide-react"

// UI Components
const Button = ({children, className = '', ...props}) => (
    <button
        className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${className}`}
        {...props}
    >
        {children}
    </button>
)

const Card = ({children, className = '', ...props}) => (
    <div
        className={`bg-white shadow-lg rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl ${className}`}
        {...props}
    >
        {children}
    </div>
)

const Alert = ({children, className = '', ...props}) => (
    <div
        className={`bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 ${className}`}
        role="alert"
        {...props}
    >
        {children}
    </div>
)

const AlertDescription = ({children, className}) => (
    <p className={`text-sm ${className}`}>{children}</p>
)

const Header = ({toggleSidebar}) => (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 mb-8">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-4xl font-bold">My English Learning Journey</h1>
            <nav className="hidden md:flex space-x-4">
                <Button className="bg-transparent hover:bg-white hover:text-blue-500">Home</Button>
            </nav>
            <button onClick={toggleSidebar} className="md:hidden">
                <Menu size={24}/>
            </button>
        </div>
    </header>
)

const BlogPost = ({title, icon, mediaType, description, link}) => (
    <Card className="mb-8 hover:transform hover:scale-105 transition-transform duration-300">
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h2>
            <div className="flex items-center mb-4 text-blue-500">
                {icon}
                <a href={link}><span className="ml-2 text-sm font-medium">{mediaType}</span></a>
            </div>
            <p className="mb-4 text-gray-600">{description}</p>
        </div>
    </Card>
)

const CriticalThinking = ({title, icon, mediaType, description, link, isHighlighted}) => (
    <>
        <Card
            className={`mb-8 hover:transform hover:scale-105 transition-transform duration-300 border-2 border-blue-500'`}>
            <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Critical Thinking in the Digital Age</h2>
                <div className="flex items-center mb-4 text-blue-500">
                    <Brain className="mr-2"/>
                    <span className="ml-2 text-sm font-medium">Critical Thinking & Media Literacy</span>
                </div>
                <div className="mb-4 text-gray-600 flex flex-col gap-4">
                    <Alert className={`bg-teal-100 mb-4 text-teal-500  border-l-4 border-teal-500`}>
                        <AlertDescription>
                            Critical thinking and media literacy are increasingly relevant in a world saturated with
                            information, especially considering the rise of fake news and artificial intelligence.
                        </AlertDescription>
                    </Alert>
                    <Alert className="bg-yellow-100 mb-4 text-yellow-500 border-l-4 border-yellow-500">
                        <AlertDescription>
                            I use IA to search information about the topics and to create the content of this blog. This
                            is so important because one of topics about the investigation i&#39;m working on is about
                            IA.
                            We need to take in mind the information is the key to create a good content, but is easy to
                            get fake information. So, the critical thinking is the key for the future of IA, the
                            capacity to analyze the information and recognize how it works.
                        </AlertDescription>
                    </Alert>
                    <div>
                        <p className="font-bold">Information Overload and Information Fatigue</p>
                        <p>
                            <span className="italic font-medium text-blue-500">The information paradox:</span>
                            <span>How information overload can lead to less understanding and less informed decisions.</span>
                        </p>
                        <p>
                            <span className="italic font-medium text-blue-500">Information fatigue:</span>
                            <span> The psychological effects of being constantly exposed to a large amount of information and how it affects our ability to process it.</span>
                        </p>
                        <p>
                            <span className="italic font-medium text-blue-500">The algorithm as curator:</span>
                            <span>How social media algorithms influence what we see and how this can limit our exposure to different points of view.</span>
                        </p>
                    </div>
                    <div>
                        <p className="font-bold">Fake News and Artificial Intelligence</p>
                        <p>
                            <span className="italic font-medium text-blue-500">AI as a content creator:</span>
                            <span> How AI can generate fake content in increasingly sophisticated ways and how to detect it.</span>
                        </p>
                        <p>
                            <span className="italic font-medium text-blue-500">Deepfakes and their impact:</span>
                            <span>The use of AI to create fake videos and its potential to manipulate public opinion.</span>
                        </p>
                        <p>
                            <span
                                className="italic font-medium text-blue-500">The importance of source verification:</span>
                            <span>Tools and techniques to verify the authenticity of information online.</span>
                        </p>
                    </div>
                    <div>
                        <p className="font-bold">Critical Thinking in the Age of AI</p>
                        <p>
                            <span className="italic font-medium text-blue-500">The role of AI in developing critical thinking:</span>
                            <span>HowAI tools can help develop critical thinking skills and what their limitations are.</span>
                        </p>
                        <p>
                            <span
                                className="italic font-medium text-blue-500">AI as a threat to critical thinking:</span>
                            <span>How over-reliance on AI can atrophy our ability to think for ourselves.</span>
                        </p>
                        <p>
                            <span className="italic font-medium text-blue-500">The future of education:</span>
                            <span>How schools and universities must adapt to the AI era and teach students to think critically in a digital world.</span>
                        </p>
                    </div>
                    <div>
                        <p className="font-bold">Media Literacy and AI</p>
                        <p>
                            <span className="italic font-medium text-blue-500">The challenges of media literacy in the AI era:</span>
                            <span>How AI complicates the task of distinguishing between what is real and what is fake.</span>
                        </p>
                        <p>
                            <span className="italic font-medium text-blue-500">The need for a new media literacy:</span>
                            <span>The skills we need to develop to navigate an increasingly complex digital environment.</span>
                        </p>
                        <p>
                            <span className="italic font-medium text-blue-500">The role of the media:</span>
                            <span>The responsibility of the media in combating disinformation and promoting critical thinking.</span>
                        </p>
                    </div>
                </div>
            </div>
        </Card>
        <Card
            className={`mb-8 hover:transform hover:scale-105 transition-transform duration-300 ${isHighlighted ? 'border-2 border-blue-500' : ''}`}>
            <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Crime and Punishment</h2>
                <div className="flex items-center mb-4 text-blue-500">
                    {icon}
                    <Gavel className="mr-2"/>
                    <span className="ml-2 text-sm font-medium">Crime and Punishment</span>
                </div>
                <div className="mb-4 text-gray-600 flex flex-col gap-4">
                    <Alert>
                        <AlertDescription className="flex flex-col gap-4">
                            <p>
                                Dostoevsky&#39;s novel, &#34;Crime and Punishment,&#34; is a work with a thematic depth
                                that invites
                                multiple interpretations. My personal favorite is the ambiguity and flexibility of
                                morality.
                                How a person who was surely in a better social or economic situation would never have
                                even thought of such a crime.
                            </p>
                            <p>
                                If I were to talk to other people, they would say that the main character, even if he
                                were in better social conditions, probably also had questionable morals, and definitely
                                i would agree with them, actually it&#39;s also the opinion of the author.
                            </p>
                        </AlertDescription>
                    </Alert>
                    <div className="flex flex-col gap-4">
                        <p>
                            Dostoevsky&#39;s <strong>&#34;Crime and Punishment&#34;</strong> is a profound exploration
                            of morality and its complexities. One of the most compelling aspects of the novel is the
                            ambiguity surrounding the protagonist, and his motivations for committing a
                            heinous crime.
                        </p>
                        <p>
                            While it&#39;s tempting to attribute the protagonist actions to his social or economic
                            circumstances, the novel suggests a deeper, more nuanced understanding of morality. Even
                            if Raskólnikov had been in a better social or economic position, his inherent moral compass
                            might still have been compromised.
                        </p>
                        <p>
                            The novel hints at a psychological predisposition towards violence and a distorted sense
                            of entitlement that could have led Raskólnikov to commit the crime, regardless of his
                            external circumstances. This ambiguity challenges our preconceived notions about morality
                            and suggests that even those seemingly privileged may harbor dark impulses.
                        </p>
                        <p>
                            Moreover, the novel raises questions about the nature of free will and the extent to
                            which our actions are determined by external factors or internal psychological forces. It
                            invites us to consider whether a person&#39;s moral character is fixed or malleable, and how
                            external circumstances can influence our choices.
                        </p>
                        <p>
                            In conclusion, &#34;Crime and Punishment&#34; offers a rich and complex exploration of
                            morality, challenging us to question our assumptions about human nature and the factors that
                            shape our actions. The novel&#39;s ambiguity and flexibility allow for multiple
                            interpretations, inviting readers to delve into the depths of the human psyche and
                            contemplate the complexities of moral decision-making.
                        </p>
                    </div>
                </div>
            </div>
        </Card>
    </>
)

const Sidebar = ({isOpen, toggleSidebar}) => (
    <aside
        className={`md:w-1/3 bg-white h-full fixed top-0 right-0 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:relative md:transform-none transition-transform duration-300 ease-in-out z-20 overflow-y-auto`}>
        <div className="p-6">
            <button onClick={toggleSidebar} className="md:hidden absolute top-4 right-4">
                <X size={24}/>
            </button>
            <Card className="p-6 mb-8 bg-gray-100">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">About Me</h3>
                <p className="mb-4 text-gray-600">Hi, I&#39;m Sergio González Sánchez. I&#39;m Frontend Developer too,
                    and on this blog i document my journey in learning English and exploring various topics like an
                    Analysis or Critics about social topics.</p>
            </Card>
        </div>
    </aside>
)

export default function App() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => setIsOpen(!isOpen);

    const blogPosts = [
        {
            title: "Video Presentación",
            icon: <PlayCircle className="mr-2"/>,
            mediaType: "GA1-240202501-AA1-EV02",
            description: "",
            link: "https://drive.google.com/file/d/1BshIiAuL2H9JazBaER3SqYs3IoqIFl0w/view?usp=sharing"
        },
        {
            title: "Inglés-Folleto",
            icon: <Mic className="mr-2"/>,
            mediaType: "GA1-240202501-AA1-EV03",
            description: "",
            link: "https://docs.google.com/presentation/d/12H11-_fdyzEf54_s5HC6nDPk4nhEu3Va/edit?usp=sharing&ouid=118417962162412002385&rtpof=true&sd=true"
        },
        {
            title: "Inglés-Vídeo entrevista virtual",
            icon: <FileText className="mr-2"/>,
            mediaType: "GA2-240202501-AA1-EV02",
            description: "",
            link: "https://drive.google.com/file/d/11zURl5L2f-18xgap6ucAFeF39L30jKuf/view?usp=sharing"
        },
        {
            title: "Inglés-Crónica",
            icon: <MapPin className="mr-2"/>,
            mediaType: "GA2-240202501-AA1-EV03",
            description: "",
            link: "https://drive.google.com/file/d/12DiKDt1IXJjul4U4hKo1AbOLxuAbglxp/view?usp=sharing"
        },
        {
            title: "Inglés-Presentación",
            icon: <Newspaper className="mr-2"/>,
            mediaType: "GA2-240202501-AA2-EV02",
            description: "",
            link: "https://docs.google.com/presentation/d/1Cnf7bSAOVzVMUXQRyhXwQzqP-E_3a24D/edit?usp=sharing&ouid=118417962162412002385&rtpof=true&sd=true"
        },
        {
            title: "Inglés-Documento escrito",
            icon: <FileText className="mr-2"/>,
            mediaType: "GA2-240202501-AA2-EV03",
            description: "",
            link: "https://drive.google.com/file/d/1CywnuIoljzKNMf6TmYlZItff-KDV-IAq/view?usp=sharing"
        },
        {
            title: "Inglés-Audio",
            icon: <Mic className="mr-2"/>,
            mediaType: "GA3-240202501-AA1-EV02",
            description: "",
            link: "https://drive.google.com/file/d/14P4tiWjqXiY_jogRPR6JXvsYbFTF7Am9/view?usp=sharing"
        },
        {
            title: "Inglés-Audio",
            icon: <Mic className="mr-2"/>,
            mediaType: "GA3-240202501-AA2-EV02",
            description: "",
            link: "https://drive.google.com/file/d/14WOAudQuOqo14hVlHI32s735GMMHVT0U/view?usp=sharing"
        },
        {
            title: "Inglés-Mapa mental PLE",
            icon: <Mic className="mr-2"/>,
            mediaType: "GA4-240202501-AA1-EV02",
            description: "",
            link: "https://drive.google.com/file/d/14SsLTzyATHBb3aAIYU3jDSH8sHF4T3Ja/view?usp=sharing"
        }
    ]

    return (
        <div className="min-h-screen bg-gray-100 border-t-2 border-gray-300 p-20">
            <Header toggleSidebar={toggleSidebar}/>
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    <main className="md:w-2/3">
                        <Alert className="mb-8">
                            <AlertDescription>
                                Welcome to my English learning blog! Here you'll find various entries about my journey
                                in mastering the English language.
                            </AlertDescription>
                        </Alert>
                        <CriticalThinking/>
                        {blogPosts.map((post, index) => (
                            <BlogPost key={index} {...post} />
                        ))}
                    </main>
                    <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
                </div>
            </div>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden" onClick={toggleSidebar}></div>
            )}
        </div>
    )
}
