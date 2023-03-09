import bootstrap from '../assets/svg/skills/bootstrap.svg'
import css from '../assets/svg/skills/css.svg'
import git from '../assets/svg/skills/git.svg'
import graphql from '../assets/svg/skills/graphql.svg'
import html from '../assets/svg/skills/html.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import mongoDB from '../assets/svg/skills/mongoDB.svg'
import mysql from '../assets/svg/skills/mysql.svg'
import photoshop from '../assets/svg/skills/photoshop.svg'
import python from '../assets/svg/skills/python.svg'
import react from '../assets/svg/skills/react.svg'
import tailwind from '../assets/svg/skills/tailwind.svg'
import figma from '../assets/svg/skills/figma.svg'
import flutter from '../assets/svg/skills/flutter.svg'
import markdown from '../assets/svg/skills/markdown.svg'
import canva from '../assets/svg/skills/canva.svg'

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'photoshop':
            return photoshop;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'react':
            return react;
        case 'bootstrap':
            return bootstrap;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'tailwind':
            return tailwind;
        case 'python':
            return python;
        case 'git':
            return git;
        case 'graphql':
            return graphql;
        case 'figma':
            return figma;
        case 'flutter':
            return flutter;
        case 'markdown':
            return markdown;
        case 'canva':
            return canva;
        default:
            break;
    }
}
