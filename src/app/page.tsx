import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { Github, Linkedin, Twitter } from 'lucide-react'

const members = [
  { name: "Alex Santoso", role: "Founder", avatar: "AS", github: "alexs", twitter: "alexs_pdf", linkedin: "alexsantoso" },
  { name: "Budi Prakoso", role: "Lead Developer", avatar: "BP", github: "budip", twitter: "budi_pdf", linkedin: "budiprakoso" },
  { name: "Citra Dewi", role: "UX Designer", avatar: "CD", github: "citrad", twitter: "citra_pdf", linkedin: "citradewi" },
  { name: "Dian Kusuma", role: "Community Manager", avatar: "DK", github: "diank", twitter: "dian_pdf", linkedin: "diankusuma" },
  { name: "Eko Prasetyo", role: "Backend Specialist", avatar: "EP", github: "ekop", twitter: "eko_pdf", linkedin: "ekoprasetyo" },
  { name: "Fitri Andriani", role: "Frontend Developer", avatar: "FA", github: "fitria", twitter: "fitri_pdf", linkedin: "fitriandriani" },
]

const projects = [
  {
    name: "FunkyCode Editor",
    description: "A code editor that makes programming a groovy experience.",
    tags: ["JavaScript", "React", "Electron"],
    github: "https://github.com/pdf-community/funkycode-editor",
  },
  {
    name: "DragDrop CMS",
    description: "Content management system with a drag-and-drop interface for easy website building.",
    tags: ["TypeScript", "Next.js", "MongoDB"],
    github: "https://github.com/pdf-community/dragdrop-cms",
  },
  {
    name: "PDF Chat",
    description: "An open-source chat application that prioritizes fun and creativity in communication.",
    tags: ["Node.js", "Socket.io", "Vue.js"],
    github: "https://github.com/pdf-community/pdf-chat",
  },
]

export default function Component() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="py-12 px-4 text-center bg-gradient-to-b from-gray-900 to-black">
        <h1 className="text-5xl font-bold mb-2">Polines Drag Funk (PDF)</h1>
        <p className="text-xl text-gray-400">Open-source Community</p>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-16">
        <section id="vision">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Vision</h2>
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                At PDF, we embrace the philosophy of &quot;Dilarang Serius&quot; (No Seriousness Allowed). We believe in fostering creativity, innovation, and fun in the world of open-source development. Our community is built on the principles of collaboration, experimentation, and pushing the boundaries of what&apos;s possible in software development – all while maintaining a lighthearted approach.
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="members">
          <h2 className="text-3xl font-bold mb-6 text-center">Core Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {members.map((member) => (
              <Card key={member.name} className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={`https://github.com/${member.github}.png`} />
                      <AvatarFallback className="bg-gray-700 text-lg">{member.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-sm text-gray-400">{member.role}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon" asChild>
                      <a href={`https://github.com/${member.github}`} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub profile of {member.name}</span>
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href={`https://twitter.com/${member.twitter}`} target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-4 w-4" />
                        <span className="sr-only">Twitter profile of {member.name}</span>
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href={`https://linkedin.com/in/${member.linkedin}`} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn profile of {member.name}</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="projects">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Projects</h2>
          <div className="space-y-6">
            {projects.map((project) => (
              <Card key={project.name} className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex justify-between items-center">
                    {project.name}
                    <Button variant="outline" size="icon" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub repository for {project.name}</span>
                      </a>
                    </Button>
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-lg">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-gray-700 text-gray-200">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-16 py-8 text-center text-gray-500 bg-gray-900">
        <p>&copy; 2023 Polines Drag Funk (PDF). All rights reserved.</p>
        <p className="mt-2 text-lg font-semibold">Remember: Dilarang Serius!</p>
        <div className="mt-4">
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black transition-colors">
            Join Our Community
          </Button>
        </div>
      </footer>
    </div>
  )
}