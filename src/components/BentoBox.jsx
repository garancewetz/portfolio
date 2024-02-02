import { useState } from 'react'
//https://www.fotor.com/features/background-remover/upload
import sticker_garance from '../assets/sticker_garance.png'
import sticker_garance1 from '../assets/sticker_garance1.png'
import sticker_garance2 from '../assets/sticker_garance2.png'

export default function BentoBox ({children}) {
  const [avatars, setAvatars] = useState([sticker_garance1, sticker_garance2, sticker_garance])
  const [selectedAvatar, setSelectedAvatar] = useState(0)
  const frameworks = ['Javascript', 'React', 'Next.js', 'Vue.js', 'Nuxt', 'Vite', 'GSAP']
  const templates = ['Liquid', 'Pug']
  const uiTools = ['SCSS', 'Tailwind', 'Element UI', 'Headless UI', 'Figma']
  const cms = ['Shopify', 'Ghost', 'Strapi', 'Storyblok', 'Djust']

  let box = 'md:p-4 xl:p-8 m-1 rounded-xl bg-white-opacity-1 hover:bg-dark border border-dark duration-200'
  let title = 'md:text-2xl xl:text-3xl'

  const changeAvatar = () => {
    setSelectedAvatar((prev) => prev === avatars.length-1 ? prev = 0 :  prev+1 )
  }

  
  return (
    <div className="h-full text-white container md:max-w-4xl xl:max-w-7xl mx-auto flex items-center">
      <div className="grid grid-cols-6 w-full">
        <div 
          className={`${box} !bg-transparent col-span-1 bg-cover bg-center`} 
          onMouseEnter={() => changeAvatar()}
          style={{ backgroundImage: `url('${avatars[selectedAvatar]}')`}}>
        </div>
        <div className={`${box} col-span-5`}>
          <div className='flex justify-between items-start'>
            <div 
              className={`${title} text-purple`}
              style={{ '--color': 'rgb(192 132 252)'}}>Colorz<br></br><small>Agence créative web</small></div>
            <div className="italic">Août 2022</div>
          </div>
            <ul className='md:mt-4 xl:mt-6'>
              <li>&bull; Développement de site web multi-devices, multi-navigateurs</li>
              <li>&bull; Maintenance & évolutions</li>
              <li>&bull; Compréhension des enjeux UI/UX</li>
            </ul>            
        </div>
  
        <div className={`${box} col-span-2`}>
          <div className={`${title} text-red`}
          style={{ '--color': 'rgb(248 113 113)'}}>Frontend Stack</div>
          <div>
          <div className='font-semibold mb-2 md:mt-4 xl:mt-6'>Frameworks / Libraries / Tools</div>
            <div className='space-y-2'>
              {frameworks.map(el => (
                <span key={el} className='label bg-white-opacity-1 mr-1.5'>{el}</span>
              ))}
            </div>
            <br></br>
            <div className='font-semibold mb-2'>Langages de template</div>
            <div className='space-y-2'>
              {templates.map(el => (
                <span key={el} className='label bg-white-opacity-1 mr-1.5'>{el}</span>
              ))}
            </div>
          </div>
        </div>
        <div className={`col-span-4 grid grid-cols-2`}>
          <div className={`${box} col-span-2`}>
            <div className='flex justify-between items-start'>
              <div className={`${title} text-purple`}
              style={{ '--color': 'rgb(192 132 252)'}}>Uptoo<br></br> <small>Spécialiste de la vente</small></div>
              <div className="italic">2019 - 2022</div>
            </div>
            <ul className='md:mt-4 xl:mt-6'>
              <li>&bull; Intégration du design system</li>
              <li>&bull; Refonte des sites vitrines & du blog</li>
              <li>&bull; Développement de e-learning</li>
            </ul>
          </div>
          <div className={`${box}`}>
            <div className={`${title} text-red`}
            style={{ '--color': 'rgb(248 113 113)'}}>UI Tools</div>
            <div className='space-y-2 md:mt-4 xl:mt-6'>
              {uiTools.map(el => (
                <span key={el} className='label bg-white-opacity-1 mr-1.5'>{el}</span>
              ))}
            </div>
          </div>
          <div className={`${box}`}>
            <div className={`${title} text-red`}
            style={{ '--color': 'rgb(248 113 113)'}}>CMS</div>
            <div className='space-y-2 md:mt-4 xl:mt-6'>
              {cms.map(el => (
                <span key={el} className='label bg-white-opacity-1 mr-1.5'>{el}</span>
              ))}
            </div>
          </div>
        </div>
    
      
        
        <div className={`${box} col-span-3`}>
          <div className={`${title} text-pink`}
          style={{ '--color': 'rgb(244 114 182)'}}>Formations</div>
          <div className='md:mt-4 xl:mt-6'>
            <ul>
              <li>&bull; 2021 - Développeuse d'application Frontend - OpenClassrooms (bac+4)</li>
              <li>&bull; 2019 - Développeuse intégratrice - 3W Academy (bac+2)</li>
              <li>&bull; 2017 - Médiation culturelle - CNAM</li>
              <li>&bull; 2015 - Master 2 de Lettres - Sorbonne Nouvelle (bac+5)</li>
            </ul>
          </div>
        </div>
        <div className={`${box} col-span-3`}>
          <div 
            className={`${title} text-purple`}
            style={{ '--color': 'rgb(192 132 252)'}}>Avant 2019</div>
          <div className='md:mt-4 xl:mt-6'>Libraire jeunesse & littérature - Gibert Jeune; Assistante chargée de production - Ville de Pantin, Direction des affaires culturelles; Assistante de chef de projet - Smart Agency</div>
        </div>
        <div className={`${box} !bg-transparent  col-span-6`}>
          <div className={`${title} text-white text-center`}
            style={{ '--color': 'white'}}>Projets</div>
        </div>
      </div>
    </div>
  )
}