import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);
import mathon from '../assets/projets/mathon.webp'
import jott from '../assets/projets/jott.webp'
import lecyclo from '../assets/projets/lecyclo.webp'
import colorz from '../assets/projets/colorz.webp'
import barrie from '../assets/projets/barrie.webp'
import empreintes from '../assets/projets/empreintes.webp'
import footkorner from '../assets/projets/footkorner.webp'
import lavantGardiste from '../assets/projets/lavant-gardiste.webp'
import uptoo from '../assets/projets/uptoo.webp'
import veja from '../assets/projets/veja.jpg'
import uptooBlog from '../assets/projets/uptooBlog.jpg'
import jcLaniece from '../assets/projets/jcLaniece.jpeg'
import maurice from '../assets/projets/maurice.jpeg'

const slides = [
  {
    name: 'Colorz',
    link: 'https://www.colorz.fr/',
    src: colorz,
    skills: ['Vue.js', 'Nuxt.js', 'Tailwind']
  },
  {
    name: 'Mathon',
    link: 'https://www.mathon.fr/',
    src: mathon,
    skills: ['Shopify', 'Tailwind', 'Javascript', 'Storyblok', 'Liquid'],
  },
  {
    name: 'Veja BtoB',
    link: false,
    disabled: true,
    src: veja,
    skills: ['Vue.JS', 'Nuxt', 'Djust', 'SCSS']
  },
  {
    name: 'Jott',
    link: 'https://jott.com/',
    src: jott,
    skills: ['Shopify', 'SCSS', 'Javascript', 'Storyblok', 'Liquid'],
  },
  {
    name: 'Uptoo Blog',
    link: 'https://uptoo.fr/blog/',
    src: uptooBlog,
    skills: ['React', 'Next.js', 'Tailwind', 'Headless UI', 'Strapi'],
  },
  {
    name: 'Empreintes',
    link: 'https://www.empreintes-paris.com/',
    src: empreintes,
    skills: ['Shopify', 'Tailwind', 'Javascript', 'Storyblok', 'Liquid'],
  },
  // {
  //   name: 'Barrie',
  //   link: 'https://www.barrie.com/en',
  //   src: barrie,
  //   skills: ['Shopify', 'Tailwind', 'Javascript', 'Storyblok', 'Liquid'],

  // },
  // {
  //   name: 'Footkorner',
  //   link: 'https://www.footkorner.com/en',
  //   src: footkorner,
  //   skills: ['Shopify', 'Tailwind', 'Javascript', 'Storyblok', 'Liquid'],
  // },
  {
    name: "L'avant gardiste",
    link: 'https://www.lavantgardiste.com/',
    src: lavantGardiste,
    skills: ['Shopify', 'SCSS', 'Javascript', 'Storyblok', 'Liquid'],

  },
  {
    name: 'Le cyclo',
    link: 'https://www.lecyclo.com/',
    src: lecyclo,
    skills: ['Shopify', 'Tailwind', 'Javascript', 'Storyblok', 'Liquid'],
  },
  {
    name: 'Uptoo',
    link: 'https://uptoo.fr/',
    src: uptoo,
    skills: ['React', 'Next.js', 'Tailwind', 'Headless UI', 'Strapi'],
  },
  {
    name: 'Maurice et les autres',
    link: 'https://mauriceetlesautres.com/',
    src: maurice,
    skills: ['Conception', 'UI/UX']
  },
  {
    name: 'Jean-Christophe Lanièce',
    link: 'https://jeanchristophelaniece.com/',
    src: jcLaniece,
    skills: ['Cargo', 'UI/UX']

  }
]

const Slide = ({ item }) => {
  return (
    <>
      <div className="slide bg-dark w-[350px] h-[425px] text-white border group border-white-opacity-1 duration-200 rounded overflow-hidden p-2 ml-10 flex flex-col hover:-translate-y-[10px]">
        <div className="preview h-[60%] rounded overflow-hidden">
          <img src={item.src} alt="The Plant" draggable="false" className="w-full h-full object-cover" />
        </div>
        <div className="p-2 flex flex-col justify-between flex-1">
          <div>
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <div className="space-y-2">
              {item.skills.map((skill, i) => (
                <div key={i} className={`label mr-2 bg-white-opacity-1`}>{skill}</div>
              ))}
            </div>
          </div>
            {item.link && (
              <a href={item.link} target='_blank' className="text-sm text-right">
                Voir le site
              </a>

            )}
        </div>
      </div>
  
    </>
  );
};

export default function Slider () {
  const sliderRef = useRef(null);

  useEffect(() => {
    console.log(sliderRef.current.clientWidth, sliderRef.current.innerWidth);
    Draggable.create(sliderRef.current, {
      type: "x",
      bounds: {
        minX: -sliderRef.current.clientWidth + window.innerWidth * 0.88,
        maxX: 0
      }
    });
  }, []);

  return (
    <div id="slider" className="slider flex" ref={sliderRef}>
      {slides.map((item, index) => {
        return (
          <Slide 
            key={index} 
            item={item}/>
        );
      })}
    </div>
  );
};