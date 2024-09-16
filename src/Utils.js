const getDomain = () => {
  return `${window.location.protocol}//${window.location.hostname}${
    window.location.port ? ':' + window.location.port : ''
  }`;
}

export const getImagePath = (imagePath) => {
  return `${getDomain()}/${imagePath}`;
}

export const formatPrice = (price) => {
  return price.toLocaleString('en-IN')
}