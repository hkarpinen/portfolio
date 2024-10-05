interface ImageLabelValueProps {
  label: string,
  value: string | number,
  imgSrc: string
}


function ImageLabelValue({ label, value, imgSrc }: ImageLabelValueProps) {
  return (
      <div className='d-flex align-items-center'>
        <img src={imgSrc} width={32} height={32} />
        <div className='ps-3'>
          <h6 className='text-primary m-0'>{label}</h6>
          <p className='m-0'>{value}</p>
        </div>
      </div>
  )
}

export default ImageLabelValue;