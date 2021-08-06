import box from '../../lib'

const Icon = (config) => {
  return config.svg ? (
    <div className="icon" innerHTML={config.svg}></div>
  ) : (
    <img src={config.src} />
  )
}

export default Icon
