import {useState} from "react";
import { Mic, PlayCircle, FileText, MapPin, Newspaper, Menu, X } from "lucide-react"

// UI Components
const Button = ({ children, className = '', ...props }) => (
    <button
        className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${className}`}
        {...props}
    >
        {children}
    </button>
)

const Card = ({ children, className = '', ...props }) => (
    <div
        className={`bg-white shadow-lg rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl ${className}`}
        {...props}
    >
        {children}
    </div>
)

const Input = ({ className = '', ...props }) => (
    <input
        className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        {...props}
    />
)

// Custom Alert Component
const Alert = ({ children, className = '', ...props }) => (
    <div
        className={`bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 ${className}`}
        role="alert"
        {...props}
    >
        {children}
    </div>
)

const AlertDescription = ({ children }) => (
    <p className="text-sm">{children}</p>
)

// Blog Components
const Header = ({ toggleSidebar }) => (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 mb-8">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-4xl font-bold">My English Learning Journey</h1>
            <nav className="hidden md:flex space-x-4">
                <Button className="bg-transparent hover:bg-white hover:text-blue-500">Home</Button>
                <Button className="bg-transparent hover:bg-white hover:text-blue-500">About</Button>
                <Button className="bg-transparent hover:bg-white hover:text-blue-500">Contact</Button>
            </nav>
            <button onClick={toggleSidebar} className="md:hidden">
                <Menu size={24} />
            </button>
        </div>
    </header>
)

const BlogPost = ({ title, icon, mediaType, description }) => (
    <Card className="mb-8 hover:transform hover:scale-105 transition-transform duration-300">
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h2>
            <div className="flex items-center mb-4 text-blue-500">
                {icon}
                <span className="ml-2 text-sm font-medium">{mediaType}</span>
            </div>
            <p className="mb-4 text-gray-600">{description}</p>
            <Button className="w-full md:w-auto">Read More</Button>
        </div>
    </Card>
)

const Sidebar = ({ isOpen, toggleSidebar }) => (
    <aside className={`md:w-1/3 bg-white h-full fixed top-0 right-0 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:relative md:transform-none transition-transform duration-300 ease-in-out z-20 overflow-y-auto`}>
        <div className="p-6">
            <button onClick={toggleSidebar} className="md:hidden absolute top-4 right-4">
                <X size={24} />
            </button>
            <Card className="p-6 mb-8 bg-gray-100">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">About Me</h3>
                <p className="mb-4 text-gray-600">Hi, I'm [Your Name]. This blog documents my journey in learning English and exploring various topics that interest me.</p>
            </Card>
            <Card className="p-6 bg-gray-100">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Subscribe</h3>
                <p className="mb-4 text-gray-600">Stay updated with my latest posts:</p>
                <Input type="email" placeholder="Enter your email" className="mb-2" />
                <Button className="w-full">Subscribe</Button>
            </Card>
        </div>
    </aside>
)

// Main Component
export default function App() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => setIsOpen(!isOpen);

    const blogPosts = [
        {
            title: "Family Traditions",
            icon: <PlayCircle className="mr-2" />,
            mediaType: "Video: Our Family Reunion",
            description: "In this video, I talk about our annual family reunion and the traditions we maintain..."
        },
        {
            title: "My Hobbies and Interests",
            icon: <Mic className="mr-2" />,
            mediaType: "Audio: Discussing My Passion for Photography",
            description: "Listen to me explain why photography has become such an important part of my life..."
        },
        {
            title: "My Dream Job",
            icon: <FileText className="mr-2" />,
            mediaType: "Text: Career Aspirations in Tech",
            description: "Read about my goals and aspirations for a career in the tech industry..."
        },
        {
            title: "Exploring My Region",
            icon: <MapPin className="mr-2" />,
            mediaType: "Video: Tour of Local Landmarks",
            description: "Join me on a virtual tour of the most interesting tourist spots in my region..."
        },
        {
            title: "Current Events",
            icon: <Newspaper className="mr-2" />,
            mediaType: "Text: Analysis of Recent News",
            description: "Read my thoughts on recent global events and their potential impacts..."
        },
        {
            title: "Critical Thinking and Media Literacy",
            icon: <FileText className="mr-2" />,
            mediaType: "Text: The Importance of Fact-Checking",
            description: "An exploration of why critical thinking skills are crucial in the age of social media..."
        },
        {
            title: "Crime and Punishment",
            icon: <Mic className="mr-2" />,
            mediaType: "Audio: Discussion on Restorative Justice",
            description: "Listen to my thoughts on alternative approaches to criminal justice..."
        }
    ]

    return (
        <div className="min-h-screen bg-gray-100 border-t-2 border-gray-300 p-20">
            <Header toggleSidebar={toggleSidebar} />
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    <main className="md:w-2/3">
                        <Alert className="mb-8">
                            <AlertDescription>
                                Welcome to my English learning blog! Here you'll find various entries about my journey in mastering the English language.
                            </AlertDescription>
                        </Alert>
                        {blogPosts.map((post, index) => (
                            <BlogPost key={index} {...post} />
                        ))}
                    </main>
                    <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
                </div>
            </div>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden" onClick={toggleSidebar}></div>
            )}
        </div>
    )
}
