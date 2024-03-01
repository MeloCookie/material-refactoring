import isBrowser from "@utils/isBrowser";

export const mdOrSm = () => {
  return isBrowser() && window.innerWidth >= 768
}//screenSizeSm

export const lgOrMd = () => {
  return isBrowser() && window.innerWidth >= 1140
}//screenSizeMd



// export const screenSize = () => {
//
//   const size = () => {
//     const result = isBrowser() && window.innerWidth >= 1140
//       ? true
//       : (window.innerWidth >= 768
//           ? true
//           :
//         )
//   }
//
//   return isBrowser() && window.innerWidth >= 1140
// }
