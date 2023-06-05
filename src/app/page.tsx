'use client';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import skills from './data/skills';
import projects from './data/projects';
import { NextPage } from 'next';
import SkillCard from './subComponents/SkillCard';
import AssetList from './components/AssetList';
import ProjectCard from './subComponents/ProjectCard';

type SkillData = {
    id: number,
    skillsName: string,
    skillsImage: string,
    skillsImageAlt: string,
  }

type ProjectData = {
    id: number,
    title: string,
    image: string,
    imageAlt: string,
    description: string,
    skills: string[],
    github: string,
    link: string,
}

const Home: NextPage = () => {
    const [expanded, setExpanded] = useState(false);

    const showMore = () => {
        setExpanded(true);
    };

    const showLess = () => {
        setExpanded(false);
    };
    return (
        <div>
            <Header />
            <main className="py-16">
                <About />
                <AssetList<SkillData>
                    assetName='Habilidades'
                    tagName='skills'
                    assetData={ skills }
                    initialNumberOfAssets={ 4 }
                    AssetCard={ SkillCard }
                    expanded={ expanded }
                    showLess={ showLess }
                    showMore={ showMore }
                    nextSection = { 'projects' }
                />
                <AssetList<ProjectData>
                    assetName='Projetos'
                    tagName='projects'
                    assetData={ projects }
                    initialNumberOfAssets={ 4 }
                    AssetCard={ ProjectCard }
                    expanded={ expanded }
                    showLess={ showLess }
                    showMore={ showMore }
                    nextSection = { 'certificates' }
                />
            </main>
            <Footer />
        </div>
    );
};


export default Home;
