import uptooBlogJpg from '/images/projets/uptooBlog.jpg'

export default function Figure ({ avif, webp, jpg, classNames}) {
  return (
    <>
      <picture>
        {avif && (
          <source
            type="image/avif"
            data-srcset="
              images/avif-750/my-performant-img.avif 750w,
              images/avif-480/my-performant-img.avif 480w
            "
          />
        )}
        {webp && (
          <source
            type="image/webp"
            srcSet={`
              ${webp} 750w,
              ${webp} 480w
            `}
          />
        )}
        <img
          alt="going on safari in the maasai mara"
          className={`lazyload ${classNames}`}
          loading="lazy"
          // data-src={jpg}
          src={jpg}
          width="800"
          height="500"
        />
      </picture>
    </>
  )
}