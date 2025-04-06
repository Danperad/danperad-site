import BrutalistButton from "@/components/Button";
import {Envelope, GithubLogo, TelegramLogo} from "@phosphor-icons/react/dist/ssr";
import {ProjectCard} from "@/components/main";

interface Project {
  title: string;
  description: string;
  imgUrl?: string;
  imgAlt?: string;
  codeUrl?: string;
  demoUrl?: string;
}

export default async function Home() {
  const getProjects = async () => {
    if (process.env.API_URL) {
      try {
        const data = await fetch(`${process.env.API_URL}/api/projects`)
        if (!data.ok)
          return []
        return await data.json();
      } catch {
        return []
      }
    }
    return []
  }
  const projects: Project[] = await getProjects()
  return (
    <>
      <nav className={"border-b-4 border-black bg-white p-4"}>
        <div className={"container mx-auto flex justify-between items-center"}>
          <div className={"text-xl font-bold uppercase"}>Danperad</div>
          <div className={"hidden md:flex gap-6"}>
            <a href={"#about"} className={"hover:text-yellow-500 uppercase"}>Обо мне</a>
            <a href={"#skills"} className={"hover:text-yellow-500 uppercase"}>Навыки</a>
            {projects.length > 0 && (
              <a href={"#projects"} className={"hover:text-yellow-500 uppercase"}>Проекты</a>
            )}
          </div>
        </div>
      </nav>

      <section className={"container mx-auto p-4 my-8"}>
        <div className={"bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8"}>
          <div className={"grid md:grid-cols-2 gap-8 items-center"}>
            <div>
              <h1 className={"text-4xl md:text-5xl font-bold mb-2 uppercase"}>Кокорин Егор</h1>
              <h2 className={"text-xl md:text-2xl mb-6 text-gray-700"}>Full Stack разработчик</h2>
              <p className={"mb-6 text-lg"}>Создаю веб-приложения с использованием современных технологий.</p>
              <div className={"flex flex-wrap gap-4"}>
                <BrutalistButton as={"a"} href={"mailto:red.danperad@gmail.com"} size={"sm"}>
                  <Envelope className={"mr-2 h-4 w-4"}/>Email
                </BrutalistButton>
                <BrutalistButton as={"a"} href={"https://github.com/Danperad"} size={"sm"} target={"_blank"}
                                 variant={"secondary"}>
                  <GithubLogo className={"mr-2 h-4 w-4"}/>GitHub
                </BrutalistButton>
                <BrutalistButton as={"a"} href={"https://t.me/danperad"} size={"sm"} target={"_blank"}
                                 variant={"outline"}>
                  <TelegramLogo className={"mr-2 h-4 w-4"}/>Telegram
                </BrutalistButton>
              </div>
            </div>
            <div className={"border-4 border-black h-64 bg-gray-200 flex items-center justify-center"}>
              <span className={"text-gray-500"}>Фото</span>
            </div>
          </div>
        </div>
      </section>

      <section id={"about"} className={"container mx-auto p-4 my-12"}>
        <h2 className={"text-3xl font-bold mb-8 uppercase border-b-4 border-black pb-2"}>Обо мне</h2>
        <div className={"bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6"}>
          <p className={"text-lg mb-4"}>
            Я - программист со стажем 4 года (если учитывать учебный...). Специализируюсь на ASP.Net, C# в Backend части
            и React, TypeScript во Frontend.
          </p>
          <p className={"text-lg"}>
            Когда я не пишу код, то читаю технические статьи или исследую новые
            технологии.
          </p>
        </div>
      </section>

      <section id={"skills"} className={"container mx-auto p-4 my-12"}>
        <h2 className={"text-3xl font-bold mb-8 uppercase border-b-4 border-black pb-2"}>Навыки</h2>
        <div className={"grid md:grid-cols-3 gap-6"}>
          <div className={"bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6"}>
            <h3 className={"text-xl font-bold mb-4 uppercase text-center"}>Backend</h3>
            <ul className={"space-y-2"}>
              <li className={"border-b-2 border-dotted border-gray-300 pb-2"}>C# / ASP.Net core</li>
              <li className={"border-b-2 border-dotted border-gray-300 pb-2"}>PostgreSQL / MongoDB</li>
              <li className={"border-b-2 border-dotted border-gray-300 pb-2"}>REST API Design</li>
              <li className={"border-b-2 border-dotted border-gray-300 pb-2"}>Аутентификация / JWT</li>
              <li>Тесты (NUnit)</li>
            </ul>
          </div>
          <div className={"bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6"}>
            <h3 className={"text-xl font-bold mb-4 uppercase text-center"}>Frontend</h3>
            <ul className={"space-y-2"}>
              <li className={"border-b-2 border-dotted border-gray-300 pb-2"}>React / Next.js</li>
              <li className={"border-b-2 border-dotted border-gray-300 pb-2"}>TypeScript</li>
              <li className={"border-b-2 border-dotted border-gray-300 pb-2"}>Tailwind CSS</li>
              <li>Redux</li>
            </ul>
          </div>
          <div className={"bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6"}>
            <h3 className={"text-xl font-bold mb-4 uppercase text-center"}>Остальные</h3>
            <ul className={"space-y-2"}>
              <li className={"border-b-2 border-dotted border-gray-300 pb-2"}>Git / GitHub</li>
              <li className={"border-b-2 border-dotted border-gray-300 pb-2"}>DevOps (Docker, CI/CD, Ansible)</li>
              <li>Nginx</li>
            </ul>
          </div>
        </div>
      </section>
      {projects.length > 0 && (
        <section id={"projects"} className={"container mx-auto p-4 my-12"}>
          <h2 className={"text-3xl font-bold mb-8 uppercase border-b-4 border-black pb-2"}>Проекты</h2>
          <div className={"grid md:grid-cols-2 gap-8"}>
            {projects.map((project: Project, index) => (
              <ProjectCard key={index} title={project.title} description={project.description} imgUrl={project.imgUrl}
                           altImg={project.imgAlt} codeHref={project.codeUrl} demoHref={project.demoUrl}/>
            ))}
          </div>
        </section>
      )}

      <footer className={"bg-black text-white p-6 mt-12"}>
        <div className={"container mx-auto text-center"}>
          <p>© {new Date().getFullYear()} Егор Кокорин. Все права защищены.</p>
        </div>
      </footer>
    </>
  );
}
