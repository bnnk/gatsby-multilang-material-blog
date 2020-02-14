/**
 * Combines a potential `className` field passed in `props` with the element
 * class name specified in `classes.root`
 * @param {Object} props - Inherited properties. Can contain a `className` property. Can also be _null_.
 * @param {Object} classes - Class set to be used. Only the `root` element, if exists, will be re-factorized.
 * @param {String=} root - Optional parameter with an alternative name for the `root` key.
 */
export const mergeClasses = (props, classes, root = 'root') => {
  if (props && props.className && classes && classes[root])
    classes[root] = `${classes[root]} ${props.className}`;
  return classes;
}


export const getImgUrl = ({ siteMetadata: { siteRoot, siteUrl, cardFileName }, slug, lang, thumbnail }) => {
  return thumbnail && thumbnail?.childImageSharp?.sizes?.src
    ? `${siteRoot}${thumbnail.childImageSharp.sizes.src}`
    : slug
      ? `${siteUrl}${lang}${slug}${cardFileName}`
      : null;
}
