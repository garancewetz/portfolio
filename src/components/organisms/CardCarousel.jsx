import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);


import Card from '../molecules/Card'

import colorzWebp from '/images/projets/colorz.webp'
import colorzJpg from '/images/projets/colorz.jpg'

import mathonWebp from '/images/projets/mathon.webp'

import jottWebp from '/images/projets/jott.webp'
import jottJpg from '/images/projets/jott.jpg'

import lecycloWebp from '/images/projets/lecyclo.webp'

import empreintesWebp from '/images/projets/empreintes.webp'
import empreintesJpg from '/images/projets/empreintes.jpg'

import lavantGardisteWebp from '/images/projets/lavant-gardiste.webp'
import lavantGardisteJpg from '/images/projets/lavant-gardiste.jpg'

import uptooWebp from '/images/projets/uptoo.webp'

import vejaJpg from '/images/projets/veja.jpg'

import uptooBlogJpg from '/images/projets/uptooBlog.jpg'

import jcLanieceJpg from '/images/projets/jcLaniece.jpg'

import mauriceJpg from '/images/projets/maurice.jpg'

const slides = [
  {
    name: 'Colorz',
    link: 'https://www.colorz.fr/',
    srcWebp: colorzWebp,
    srcAvif: null,
    srcJpg: colorzJpg,
    skills: ['Vue.js', 'Nuxt.js', 'Tailwind']
  },
  {
    name: 'Mathon',
    link: 'https://www.mathon.fr/',
    srcWebp: mathonWebp,
    skills: ['Shopify', 'Tailwind', 'Javascript', 'Storyblok', 'Liquid'],
  },
  {
    name: 'Veja BtoB',
    link: false,
    disabled: true,
    srcJpg: vejaJpg,
    skills: ['Vue.JS', 'Nuxt', 'Djust', 'SCSS']
  },
  {
    name: 'Jott',
    link: 'https://jott.com/',
    srcWebp: jottWebp,
    srcJpg: jottJpg,
    skills: ['Shopify', 'SCSS', 'Javascript', 'Storyblok', 'Liquid'],
  },
  {
    name: 'Uptoo Blog',
    link: 'https://uptoo.fr/blog/',
    srcJpg: uptooBlogJpg,
    skills: ['React', 'Next.js', 'Tailwind', 'Headless UI', 'Strapi'],
  },
  {
    name: 'Empreintes',
    link: 'https://www.empreintes-paris.com/',
    srcWebp: empreintesWebp,
    srcJpg: empreintesJpg,
    skills: ['Shopify', 'Tailwind', 'Javascript', 'Storyblok', 'Liquid'],
  },
  {
    name: "L'avant gardiste",
    link: 'https://www.lavantgardiste.com/',
    srcWebp: lavantGardisteWebp,
    srcJpg: lavantGardisteJpg,
    skills: ['Shopify', 'SCSS', 'Javascript', 'Storyblok', 'Liquid'],
  },
  {
    name: 'Le cyclo',
    link: 'https://www.lecyclo.com/',
    srcWebp: lecycloWebp,
    skills: ['Shopify', 'Tailwind', 'Javascript', 'Storyblok', 'Liquid'],
  },
  {
    name: 'Uptoo',
    link: 'https://uptoo.fr/',
    srcWebp: uptooWebp,
    skills: ['React', 'Next.js', 'Tailwind', 'Headless UI', 'Strapi'],
  },
  {
    name: 'Maurice et les autres',
    link: 'https://mauriceetlesautres.com/',
    srcJpg: mauriceJpg,
    skills: ['Conception', 'UI/UX']
  },
  {
    name: 'Jean-Christophe Lanièce',
    link: 'https://jeanchristophelaniece.com/',
    srcJpg: jcLanieceJpg,
    skills: ['Cargo', 'UI/UX']

  }
]

export default function Slider () {
  const sliderRef = useRef(null);

  useEffect(() => {
    Draggable.create(sliderRef.current, {
      type: "x",
      bounds: {
        minX: -sliderRef.current.clientWidth + window.innerWidth * 0.88,
        maxX: 0
      }
    });
  }, []);

 
  return (
    <ul id="slider" className="slider flex" ref={sliderRef}>
      {slides.map((item, index) => (
        <li key={index}>
          <Card item={item}></Card>
        </li>
      ))}
    </ul>
  );
};