import Link from 'next/link'
import Image from 'next/image'

const ImageSwap = ({ href, swapFrom, swapTo, className, ...props }) => {
  const extraClass = className ? ` ${className}` : '',
    imgFromSrc = swapFrom.imgSrc,
    imgFromWidth = swapFrom.imgSize[0],
    imgFromHeight = swapFrom.imgSize[1],
    imgFromAlt = swapFrom.imgAlt,
    imgToSrc = swapTo.imgSrc,
    imgToWidth = swapTo.imgSize[0],
    imgToHeight = swapTo.imgSize[1],
    imgToAlt = swapTo.imgAlt

  return (
    <>
      {href ? (
        <Link href={href} {...props} className={`swap-image${extraClass}`}>
          <span>
            <Image
              priority
              src={imgToSrc}
              width={imgToWidth}
              height={imgToHeight}
              alt={imgToAlt}
            />
          </span>
          <span>
            <Image
              priority
              src={imgFromSrc}
              width={imgFromWidth}
              height={imgFromHeight}
              alt={imgFromAlt}
            />
          </span>
        </Link>
      ) : (
        <div {...props} className={`swap-image${extraClass}`}>
          <span>
            <Image
              priority
              src={imgToSrc}
              width={imgToWidth}
              height={imgToHeight}
              alt={imgToAlt}
            />
          </span>
          <span>
            <Image
              priority
              src={imgFromSrc}
              width={imgFromWidth}
              height={imgFromHeight}
              alt={imgFromAlt}
            />
          </span>
        </div>
      )}
    </>
  )
}

export default ImageSwap
