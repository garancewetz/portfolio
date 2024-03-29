import { useState } from 'react'
//https://www.fotor.com/features/background-remover/upload

import sticker_garance from '/images/profile/sticker_garance.webp'
import sticker_garance1 from '/images/profile/sticker_garance1.webp'
import sticker_garance2 from '/images/profile/sticker_garance2.webp'

export default function BentoBox ({children}) {
  const [avatars, setAvatars] = useState([sticker_garance1, sticker_garance2, sticker_garance])
  const [selectedAvatar, setSelectedAvatar] = useState(0)
  const frameworks = ['Javascript', 'React', 'Next.js', 'Vue.js', 'Nuxt', 'Vite', 'GSAP']
  const templates = ['Liquid', 'Pug', 'Mustache']
  const uiTools = ['SCSS', 'Tailwind', 'Element UI', 'Headless UI', 'Figma']
  const cms = ['Shopify', 'Ghost', 'Strapi', 'Storyblok', 'Djust']

  let box = 'p-6 xl:p-8 md:m-2 md:rounded-xl glassmorphism white hover:bg-transparent border border-dark duration-200 group'
  let title = 'mb-2 md:mb-4 xl:mb-6 text-xl md:text-2xl xl:text-3xl'

  const changeAvatar = () => {
    setSelectedAvatar((prev) => prev === avatars.length-1 ? prev = 0 :  prev+1 )
  }

  
  return (
    <div className="h-full text-white container max-w-full md:px-6 xl:max-w-[87rem] mx-auto flex items-center">
      <div className="md:grid md:grid-cols-6 w-full">
        <div 
          className={`md:p-4 xl:p-8 m-2 rounded-xl bg-transparent col-span-1 bg-cover bg-center relative`} 
          onMouseEnter={() => changeAvatar()}
          style={{ backgroundImage: `url('${avatars[selectedAvatar]}')`}}>
        </div>
        <div className={`${box} col-span-5`}>
          <div className='flex justify-between items-start'>
            <h3 
              className={`${title} text-purple`}
              style={{ '--color': 'rgb(192 132 252)'}}>Colorz<br></br><small>Agence créative web</small></h3>
            <div className="italic">Août 2022</div>
          </div>
            <ul>
              <li>&bull; Développement de site web multi-devices, multi-navigateurs</li>
              <li>&bull; Maintenance & évolutions</li>
              <li>&bull; Compréhension des enjeux UI/UX</li>
            </ul>            
        </div>
  
        <div className={`${box} col-span-2`}>
          <h3 className={`${title} text-pink`}
          style={{ '--color': 'rgb(248 113 113)'}}>Frontend Stack</h3>
          <div>
          <h4 className='font-semibold mb-2'>Frameworks / Libraries / Tools</h4>
            <ul className='space-y-2'>
              {frameworks.map(el => (
                <li key={el} className='label bg-white-opacity-1 mr-1.5 text-lg duration-200'>{el}</li>
              ))}
            </ul>
            <br></br>
            <h4 className='font-semibold mb-2'>Langages de template</h4>
            <ul className='space-y-2'>
              {templates.map(el => (
                <li key={el} className='label bg-white-opacity-1 mr-1.5 text-lg duration-200'>{el}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={`col-span-4 grid grid-cols-2`}>
          <div className={`${box} col-span-2`}>
            <div className='flex justify-between items-start'>
              <h3 className={`${title} text-purple`}
              style={{ '--color': 'rgb(192 132 252)'}}>Uptoo</h3>
              <div className="italic">2019 - 2022</div>
            </div>
            <ul>
              <li>&bull; Intégration du design system</li>
              <li>&bull; Refonte des sites vitrines & du blog</li>
              <li>&bull; Développement de e-learning</li>
            </ul>
          </div>
          <div className={`${box}`}>
            <h3 className={`${title} text-pink`}
            style={{ '--color': 'rgb(248 113 113)'}}>UI Tools</h3>
            <ul className='space-y-2'>
              {uiTools.map(el => (
                <li key={el} className='label bg-white-opacity-1 mr-1.5 text-lg duration-200'>{el}</li>
              ))}
            </ul>
          </div>
          <div className={`${box}`}>
            <h3 className={`${title} text-pink`}
            style={{ '--color': 'rgb(248 113 113)'}}>CMS</h3>
            <ul className='space-y-2'>
              {cms.map(el => (
                <li key={el} className='label bg-white-opacity-1 mr-1.5 text-lg duration-200'>{el}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className={`${box} col-span-3`}>
          <h3 className={`${title} text-white`}
          style={{ '--color': 'rgb(244 114 182)'}}>Formations</h3>
          <div>
            <ul>
              <li>&bull; 2021 - Développeuse d'application Frontend - OpenClassrooms (bac+4)</li>
              <li>&bull; 2019 - Développeuse intégratrice - 3W Academy (bac+2)</li>
              <li>&bull; 2017 - Médiation culturelle - CNAM</li>
              <li>&bull; 2015 - Master 2 de Lettres - Sorbonne Nouvelle (bac+5)</li>
            </ul>
          </div>
        </div>
        <div className={`${box} col-span-3`}>
          <h3 
            className={`${title} text-white`}
            style={{ '--color': 'rgb(192 132 252)'}}>Avant 2019</h3>
          <div>Libraire jeunesse & littérature - Gibert Jeune; Assistante chargée de production - Ville de Pantin, Direction des affaires culturelles; Assistante de chef de projet - Smart Agency</div>
        </div>
      </div>
    </div>
  )
}