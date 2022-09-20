import { useState, useEffect } from 'react';
import { ProjectsCarousel } from '../../components/ProjectsCarousel';
import './style.scss';

export const Profile = () => {
  const [repos, setRepos] = useState(null);

  const getRepoData = async () => {
    const req = await fetch(`https://api.github.com/users/AlexandreCamposs/repos`)
    const parse = await req.json()
    setRepos(parse)
  };

  useEffect(() => {
    getRepoData();
  }, []);

  return (
    <section className="profile-container">
      <div className="img">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E03AQEfTwMiD_EMlw/profile-displayphoto-shrink_200_200/0/1612121111583?e=1669248000&v=beta&t=mOQLB0KyUjnO7k6JyTni0GPGloO-uPAZLHrt0gvk5Xk"
          alt=""
        />
      </div>
      <div className="profile">
        <h2>Dados pessoais</h2>
        <p>Alexandre Moura de Campos</p>
        <p>Cidade: Praia Grande</p>
      </div>
      <div className="formation">
        <h2>Formação</h2>
        <p>Ensino Superior Incompleto</p>
      </div>
      <div className="xp">
        <h2>Experiência</h2>
        <p>Operador de caixa.</p>
      </div>
      <div className="projects">
        <h2>Projetos</h2>
        <ProjectsCarousel repoArr={repos} />
      </div>
    </section>
  );
};
