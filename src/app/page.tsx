'use client';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import { skills, SkillData } from './data/skills';
import { projects, ProjectData } from './data/projects';
import { certificates, CertificateData } from './data/certificates';
import { NextPage } from 'next';
import SkillCard from './subComponents/SkillCard';
import ProjectCard from './subComponents/ProjectCard';
import CertificatesCard from './subComponents/CertificatesCard';
import Section from './components/Section';


const Home: NextPage = () => {
    const [expandedSkills, setExpandedSkills] = useState(false);
    const [expandedProjects, setExpandedProjects] = useState(false);
    const [expandedCertificates, setExpandedCertificates] = useState(false);

    return (
        <div className=" bg-gray-200">
            <Header />
            <main className="py-16 h-full">
                <About />
                <Section<SkillData>
                    assetName='Habilidades'
                    tagName='skills'
                    assetData={ skills }
                    initialNumberOfAssets={ 4 }
                
                    AssetCard={ SkillCard }
                    expanded={ expandedSkills }
                    setExpanded={ setExpandedSkills }
                    nextSection = 'projects'
                    maxHeight={ 'max-h-40' }
                />
                <Section<ProjectData>
                    assetName='Projetos'
                    tagName='projects'
                    assetData={ projects }
                    initialNumberOfAssets={ 3 }
                    
                    AssetCard={ ProjectCard }
                    expanded={ expandedProjects }
                    setExpanded={ setExpandedProjects }
                    nextSection = 'certificates'
                    maxHeight={ 'max-h-[750px]' }
                />
                <Section<CertificateData>
                    assetName='Certificados'
                    tagName='certificates'
                    assetData={ certificates }
                    initialNumberOfAssets={ 3 }
                    
                    AssetCard={ CertificatesCard }
                    expanded={ expandedCertificates }
                    setExpanded={ setExpandedCertificates }
                    nextSection = 'japhe'
                    maxHeight={ 'max-h-[540px]' }
                />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
