//helper para iconos de Proyectos

import styled from 'styled-components';
import firebase from './images/firebase.png';

const Svg = styled.svg`
    height:clamp(1rem, 8vw, 3rem);
    width:clamp(1rem, 8vw, 3rem);
    padding: 0.1rem;
    margin: 0;
`;
const Svge = styled.svg`
    height:clamp(1rem, 8vw, 3rem);
    width:clamp(1rem, 8vw, 3rem);
    padding: 0.1rem;
    margin: 0;
    border-radius:50%;
    background-color:white;
`;

const Img = styled.img`
    height:clamp(1rem, 8vw, 3rem);
    width:clamp(1rem, 8vw, 3rem);
    padding: 0.1rem;
    margin: 0;
`;

const Span = styled.span`
    height:clamp(1rem, 8vw, 3rem);
    width:clamp(1rem, 8vw, 3rem);
    padding: 0.1rem;
    margin: 0;
`;

export const converter = Arr => {
    const HTML = <Span className="iconify" data-icon="logos:html-5" data-inline="false"></Span>;
    const CSS = <Svg enable-background="new 0 0 1771 2499.8" viewBox="0 0 1771 2499.8" xmlns="http://www.w3.org/2000/svg"><path d="m1387.8 92.5h-146.9l152.8 165.9v78.9h-314.8v-92.4h152.8l-152.8-165.9v-79h309zm-371.4 0h-147.1l153 165.9v78.9h-314.9v-92.4h152.8l-152.8-165.9v-79h309zm-367.8 3.8h-158.5v144.8h158.5v96.3h-271.3v-337.4h271.3z" fill="#131313"/><path d="m161.2 2299.1-161.2-1807.7h1771l-161.4 1807.4-725.2 201z" fill="#1572b6"/><path d="m885.5 2346.2 586-162.5 137.8-1544.5h-723.8z" fill="#33a9dc"/><path d="m885.5 1294.1h293.4l20.2-227h-313.6v-221.6h556l-5.3 59.5-54.5 611h-496.2z" fill="#fff"/><path d="m886.7 1869.9h-1l-246.9-66.7-15.8-176.8h-222.4l31.1 348.1 454.2 126.4h1.3v-231z" fill="#ebebeb"/><path d="m1160.1 1506.3-26.7 296.7-247.3 66.7v231l454.5-126 3.3-37.5 38.6-431h-222.4z" fill="#fff"/><path d="m886.3 845.5v221.7h-535.4l-4.6-49.8-10.1-112.4-5.3-59.5zm-.8 448.6v221.7h-244.1l-4.3-49.8-10.1-112.4-5.3-59.5h263.7z" fill="#ebebeb"/></Svg>;
    const jQuery = <Svg width="2500" height="566" viewBox="0 0 512 116" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M489.718 8.646l21.42.118s-39.824 53.964-43.076 58.362c-1.056 1.424-2.66 2.96-3.474 4.864-2.057 4.786-4.169 15.285-4.169 15.285l-19.599.098s3.05-10.944 2.924-16.773c-.11-5.092-2.71-10.178-4.168-15.285-1.474-5.17-3.475-15.286-3.475-15.286h20.15l2.779 11.117 30.688-42.5" fill="#1A1918"/><path d="M449.157 20.027c3.953 2.383 6.379 15.529 6.379 15.529s-20.684.305-31.94.305h-9.727l-11.812 51.414h-18.064s11.242-55.874 13.896-66.004c.86-3.28 5.892-2.717 14.389-2.717h13.569c8.762 0 19.003-1.119 23.31 1.473M365.06 45.067s.563-3.3-1.91-7.122c-2.113-3.258-4.064-4.016-9.623-4.19-15.695-.493-15.39 11.138-15.39 11.138l26.923.174zm17.022-13.32c2.3 8.297-2.084 27.792-2.084 27.792s-22.894-.382-35.434 0c-3.899.119-8.566-.424-9.727 1.39-1.633 2.542.597 6.455 2.487 8.108 2.175 1.903 6.412 2.12 7.935 2.313 10.178 1.293 31.48.334 31.48.334l-3.69 16.34s-30.103 1.51-45.16-2.084c-2.973-.708-5.76-2.139-7.643-4.168-.514-.555-.96-1.312-1.446-1.966-.388-.522-1.52-2.237-2.028-3.593-3.439-9.164.403-26.72 4.169-36.128.437-1.09.986-2.473 1.564-3.648.722-1.465 1.333-3.119 1.91-3.995.388-.604.869-.993 1.272-1.563.465-.674 1.006-1.327 1.507-1.91 1.39-1.612 2.967-2.752 4.864-4.168 6.273-4.698 17.626-8.345 31.265-6.949 5.135.528 12.89 2.362 16.675 7.643 1.014 1.41 1.515 4.21 2.084 6.253zM299.229 18.49l17.516-.103s-9.762 46.307-14.737 68.888h-20.15c-14.082 0-26.623 1.744-31.959-8.338-5.176-9.789-.236-25.887 2.084-36.824 1.64-7.74 5.094-23.56 5.094-23.56l18.148-.166s-5.128 24.63-7.262 36.928c-.764 4.405-2.34 8.553-.694 11.81 1.563 3.1 3.752 3.322 10.421 3.475 2.113.05 9.033 0 9.033 0l12.506-52.11M217.244 51.84c1.834-6.516 4.509-13.582 4.169-19.454-.368-6.28-5.634-11.998-9.032-13.2-10.234-3.613-19.815 1.438-23.623 5.558-4.926 5.336-6.594 11.569-8.338 20.15-1.298 6.37-2.362 13.095 0 18.063 4.182 8.783 17.224 6.865 31.266 6.949 2.084-5.586 3.807-11.86 5.558-18.066zm24.318-25.706c2 14.548-5.676 30.606-10.964 44.57 5.392.487 10.117-.075 10.457.327.354.521-3.614 16.668-4.997 16.71-4.279.111-18.459.229-24.372.229-19.295 0-37.345 1.257-46.55-8.337-3.738-3.898-6.323-10.583-6.949-15.286-1.042-7.851.264-16.495 2.085-23.622 1.647-6.435 3.758-12.507 6.948-18.066C175.328 8.507 189.432-1.998 213.075.427c4.586.472 11.172 2.48 15.286 4.863.284.167 1.279.959 1.507 1.098 5.559 3.537 10.624 11.978 11.694 19.746zM156.193 18.574c-1.167 5.315-2.334 11.34-3.564 16.592h-19.454c1.507-5.822 2.661-11.61 4.169-16.675 6.225 0 12.013.083 18.85.083M132.48 40.03h18.76c-2.453 13.576-7.31 35.475-11.117 50.719-2.383 9.54-3.974 16.501-10.422 21.538-.577.452-.91.237-1.39.695-1.188 1.133-6.684 2.447-9.726 2.779-4.947.536-10.54.07-16.62-.055 1.591-5.815 3.391-12.798 4.809-18.01 14.82 1.794 15.195-12.214 18.064-25.706 1.66-7.796 6.691-28.834 7.642-31.96" fill="#1A1918"/><g fill="#21609B"><path d="M88.708 75.464l-.402 1.042c-6.85 13.34-18.989 21.524-36.303 21.885-8.094.167-15.806-1.91-20.844-4.168C20.287 89.338 11.142 80.279 6.148 70.6c-7.164-13.875-8.456-33.176 6.44-47.592.23 0-1.807 3.126-1.577 3.126l-.41 1.334C-.133 61.074 32.938 89.874 65.086 86.58c7.726-.792 17.578-5.023 23.622-11.116"/><path d="M69.254 61.568c8.088.055 16.536-3.725 21.539-9.032-4.377 11.11-17.05 18.251-34.044 15.98-14.23-1.904-27.785-16.223-29.181-30.571-1.021-10.442 2.618-16.674 8.615-24.234-2.084 3.954-2.863 7.003-3.057 8.948-2.278 22.588 18.044 38.79 36.128 38.909"/><path d="M89.98 33.512c-1.257 2.884-8.496 8.33-11.693 9.011-12.659 2.697-20.766-3.306-25.013-10.137-.631-1.02-1.798-3.806-2.007-4.515-1.647-5.6-.89-14.07 4.023-18.454-1.48 4.169-1.696 9.011-.917 12.159.472 1.903 1.91 5.226 3.349 7.316 2.618 3.807 4.279 4.732 7.642 6.754 1.515.91 3.14 1.64 3.842 1.84 3.189.939 9.922 3.412 20.775-3.974"/></g></g></Svg>;
    const Phonegap = <Svg width="2500" height="2393" viewBox="0 0 256 245" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M232.727 244.364h-41.454l2.909-34.91h-20.364l-2.909 34.91H85.091l-2.91-34.91H61.819l2.91 34.91H23.272L0 93.09 58.182 0h139.636L256 93.09l-23.273 151.274zM186.182 46.545h-37.403L151.273 64h-46.546l2.494-17.455H69.818L46.545 93.091l11.637 93.09h139.636l11.637-93.09-23.273-46.546zm-20.364 108.742c-3.213 0-5.818-9.69-5.818-21.643 0-11.954 2.605-21.644 5.818-21.644 3.213 0 5.818 9.69 5.818 21.644 0 11.953-2.605 21.643-5.818 21.643zm-73.454 1.804c-3.213 0-5.819-9.69-5.819-21.644 0-11.953 2.606-21.643 5.819-21.643s5.818 9.69 5.818 21.643c0 11.954-2.605 21.644-5.818 21.644z" fill="#444"/></Svg>;
    const JS = <Svg viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid"><g><path d="M0,0 L256,0 L256,256 L0,256 L0,0 Z" fill="#F7DF1E"></path><path d="M67.311746,213.932292 L86.902654,202.076241 C90.6821079,208.777346 94.1202286,214.447137 102.367086,214.447137 C110.272203,214.447137 115.256076,211.354819 115.256076,199.326883 L115.256076,117.528787 L139.313575,117.528787 L139.313575,199.666997 C139.313575,224.58433 124.707759,235.925943 103.3984,235.925943 C84.1532952,235.925943 72.9819429,225.958603 67.3113397,213.93026" fill="#000000"></path><path d="M152.380952,211.354413 L171.969422,200.0128 C177.125994,208.433981 183.827911,214.619835 195.684368,214.619835 C205.652521,214.619835 212.009041,209.635962 212.009041,202.762159 C212.009041,194.513676 205.479416,191.592025 194.481168,186.78207 L188.468419,184.202565 C171.111213,176.81473 159.597308,167.53534 159.597308,147.944838 C159.597308,129.901308 173.344508,116.153295 194.825752,116.153295 C210.119924,116.153295 221.117765,121.48094 229.021663,135.400432 L210.29059,147.428775 C206.166146,140.040127 201.699556,137.119289 194.826159,137.119289 C187.78047,137.119289 183.312254,141.587098 183.312254,147.428775 C183.312254,154.646349 187.78047,157.568406 198.089956,162.036622 L204.103924,164.614095 C224.553448,173.378641 236.067352,182.313448 236.067352,202.418387 C236.067352,224.071924 219.055137,235.927975 196.200432,235.927975 C173.860978,235.927975 159.425829,225.274311 152.381359,211.354413" fill="#000000"></path></g></Svg>;
    const Reactjs = <Svg id="Layer_2"  version="1.1" viewBox="0 0 600 600" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><circle className="st0" cx="299.5" cy="299.6" r="50.2" fill="#00D8FF"/><g><path className="st0" d="M299.5,414.6c-70.5,0-132.1-8.3-178.2-24.1c-29.9-10.2-55.3-23.8-73.4-39.3c-19.2-16.4-29.4-34.3-29.4-51.6   c0-33.2,36.4-65.7,97.5-86.9c50-17.4,115.2-27.1,183.4-27.1c67,0,131.3,9.4,181,26.6c29.1,10,53.6,23,71,37.4   c18.9,15.8,28.9,33.1,28.9,50c0,34.5-40.7,69.4-106.3,91.1C427.6,406.1,365.6,414.6,299.5,414.6z M299.5,209.6   c-64.7,0-128.7,9.4-175.5,25.7c-56.2,19.6-81.4,46.4-81.4,64.3c0,18.6,27.1,47.9,86.5,68.2c43.6,14.9,102.6,22.8,170.4,22.8   c63.6,0,122.9-8,167-22.7c61.7-20.5,89.9-49.8,89.9-68.3c0-9.5-7.2-20.7-20.3-31.6c-15.1-12.6-37.1-24.1-63.4-33.2   C425.4,218.6,363.9,209.6,299.5,209.6z" fill="#00D8FF"/></g><g><path className="st0" d="M185.6,549.8c-10.2,0-19.2-2.2-26.8-6.6c-28.7-16.6-38.7-64.4-26.6-127.9c9.9-52.1,34.1-113.3,68.2-172.4   c33.5-58,73.7-109,113.4-143.5c23.2-20.2,46.7-35,67.9-42.8c23.1-8.5,43.1-8.5,57.7-0.1c29.9,17.2,39.8,70,25.8,137.6   c-9.9,48-33.5,105.9-66.5,163.2c-35.2,61-73.2,110.2-109.9,142.3c-23.8,20.8-48.3,36-70.7,43.9   C206.4,547.7,195.4,549.8,185.6,549.8z M210.7,248.9l10.4,6c-32.3,56-56.2,116.1-65.4,164.9c-11.1,58.5-0.4,93.7,15,102.6   c3.8,2.2,8.8,3.4,14.9,3.4c19.9,0,51.2-12.6,87.4-44.2c34.7-30.3,71-77.5,104.9-136.2c31.8-55.1,54.4-110.5,63.8-156   c13.1-63.7,1.8-102.7-14.3-112c-8.2-4.7-21.5-4.1-37.5,1.8c-18.5,6.8-39.4,20.1-60.4,38.4c-37.7,32.8-76.2,81.6-108.4,137.4   L210.7,248.9z" fill="#00D8FF"/></g><g><path className="st0" d="M413.4,550.1c-27.2,0-61.7-16.4-97.7-47.4c-40.2-34.6-81.1-86.1-115.3-145.2v0c-33.6-58-57.6-118.3-67.7-170   c-5.9-30.2-7-57.9-3.2-80.2c4.2-24.3,14.1-41.6,28.8-50.1c29.8-17.3,80.5,0.5,132.1,46.4c36.6,32.5,75,81.9,108.1,139.1   c35.3,61,59,118.5,68.4,166.3c6.1,31,7.1,59.8,2.8,83.2c-4.6,24.9-15,42.6-30,51.3C432.2,547.9,423.3,550.1,413.4,550.1z    M221.2,345.5c32.4,56,72.6,106.7,110.2,139c45.1,38.8,80.9,47.2,96.4,38.2c16.1-9.3,27.9-47.4,15.7-109   c-9-45.2-31.7-100.2-65.7-158.9c-31.9-55.1-68.6-102.4-103.3-133.2C225.9,78.4,186.5,68.7,170.4,78c-8.2,4.7-14.3,16.6-17.2,33.4   c-3.3,19.4-2.3,44.2,3.1,71.5C165.9,232,188.9,289.7,221.2,345.5L221.2,345.5z" fill="#00D8FF"/></g></Svg>;
    const Nextjs = <Svg height="1509" viewBox=".145 .207 147.685 89.291" width="2500" xmlns="http://www.w3.org/2000/svg"><path d="m34.992 23.495h27.855v2.219h-25.301v16.699h23.792v2.219h-23.792v18.334h25.591v2.219h-28.145zm30.35 0h2.96l13.115 18.334 13.405-18.334 18.233-23.288-29.955 43.549 15.436 21.429h-3.076l-14.043-19.502-14.101 19.502h-3.018l15.552-21.429-14.507-20.261zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47h-14.564zm-99.494-2.219h3.192l44.011 66.003-18.188-24.313-26.346-38.537-.116 38.537h-2.553zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443h1.367c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z"/></Svg>;
    const Gatsbyjs = <Svg enable-background="new 0 0 2500 2500" viewBox="0 0 2500 2500" xmlns="http://www.w3.org/2000/svg"><path d="m1250 0c-690.4 0-1250 559.6-1250 1250s559.6 1250 1250 1250 1250-559.6 1250-1250-559.6-1250-1250-1250zm-981.4 1263 968.4 968.4c-531.8-6.9-961.5-436.6-968.4-968.4zm1201.1 943.9-1176.6-1176.6c99.8-436.3 490.3-761.9 956.9-761.9 326.1 0 615.1 159.1 793.6 403.9l-135.9 119.9c-144.8-207.6-385.4-343.5-657.7-343.5-346.7 0-642 220.2-753.6 528.4l1026.5 1026.4c249.3-90.3 441-300.7 505.2-561.3h-425.4v-192.2h629c-.1 466.6-325.7 857.1-762 956.9z" fill="#744c9e"/></Svg>;
    const Nodejs = <Svg enable-background="new 0 0 2249 2249" viewBox="0 0 2249 2249" xmlns="http://www.w3.org/2000/svg"><path d="m2249 1124.5c0 621-503.5 1124.5-1124.5 1124.5-573 0-1045.9-428.5-1115.6-982.6-5.9-47.1-8.9-94.5-8.9-141.9 0-88 10.1-173.7 29.2-255.9 115.9-497.7 562.3-868.6 1095.3-868.6 531.7 0 977.2 369 1094.3 864.9 15.6 65.8 25.1 132.9 28.6 200.5 1.1 19.7 1.6 39.4 1.6 59.1z" fill="#f2f2f2"/><path d="m1068.3 1214.8v-292.4l-253.2-146.1-253.2 146.1v292.4l253.2 146.2z" fill="#3b8739"/><path d="m2065.4 1170.4 165 95.3-165 95.3-253.2-146.2v-292.3l253.2-146.2 153.4 88.6c15.6 65.8 25.1 132.9 28.6 200.5l-93.8 54.2v-101.8l-88.2-50.9-88.2 50.9v101.8z" fill="#333"/><path d="m2114.6 1097v-56.8l-49.1-28.4-49.2 28.4v56.8l49.2 28.4z" fill="#66a060"/><path d="m442.3 922.5v385.5l-168.9-96.3v-197.7l-84.3-48.7-84.3 48.7v197.6l-95.9 54.7c-5.9-47-8.9-94.4-8.9-141.8 0-88 10.1-173.7 29.2-255.9l159.9-92.3z" fill="#333"/><path d="m815 776.2 253.2 438.5-253.2 146.2-253.1-438.5z" fill="#6da75d"/><path d="m561.9 1214.8 86.9-141.8-86.9-150.6z" fill="#55a344"/><path d="m983.8 1068.6 84.4-146.2-253.1-146.1z" fill="#639d57"/><path d="m1522.3 437.4v387.9l-84.9-49-253.2 146.2v292.4l253.2 146.2 253.2-146.2v-687.4zm-.5 679.9-84.4 48.7-84.4-48.7v-97.4l84.4-48.7 84.4 48.7z" fill="#333"/><g fill="#66a060"><path d="m1239.4 1575.7s-5-42.7-50.7-42.7-77 6-77 31.3 88.9 25.3 122.7 35.3c33.8 9.9 63.6 35.8 48.7 81.5s-60.6 50.7-131.2 50.7-86.5-58.6-86.5-81.5h39.8s-5 35.8 41.7 41.7 91.4 9.3 97.4-26.8c8-47.7-151.1-23.9-165-70.6-11.8-39.5-5-91.4 74.5-99.4s123.2 27.2 123.2 79.5z"/><path d="m855.3 1762 87.9 50.7c44.2 25.5 99.4-6.4 99.4-57.4v-252.6h-35.8v242.6c0 27.8-30.1 45.3-54.3 31.3l-61.3-35.4v-258.9l224.2-129.4 224.2 129.4v258.9l-224.2 129.4-64.6-37.3-42.2 17 106.8 61.6 260-150.1v-300.2l-260-150.1-260 150.1z"/></g></Svg>;
    const MongoDB = <Svg height="2500" viewBox="8.738 -5.03622834 17.45992422 39.40619484" width="2500" xmlns="http://www.w3.org/2000/svg"><path d="m15.9.087.854 1.604c.192.296.4.558.645.802a22.406 22.406 0 0 1 2.004 2.266c1.447 1.9 2.423 4.01 3.12 6.292.418 1.394.645 2.824.662 4.27.07 4.323-1.412 8.035-4.4 11.12a12.7 12.7 0 0 1 -1.57 1.342c-.296 0-.436-.227-.558-.436a3.589 3.589 0 0 1 -.436-1.255c-.105-.523-.174-1.046-.14-1.586v-.244c-.024-.052-.285-24.052-.181-24.175z" fill="#599636"/><path d="m15.9.034c-.035-.07-.07-.017-.105.017.017.35-.105.662-.296.96-.21.296-.488.523-.767.767-1.55 1.342-2.77 2.963-3.747 4.776-1.3 2.44-1.97 5.055-2.16 7.808-.087.993.314 4.497.627 5.508.854 2.684 2.388 4.933 4.375 6.885.488.47 1.01.906 1.55 1.325.157 0 .174-.14.21-.244a4.78 4.78 0 0 0 .157-.68l.35-2.614z" fill="#6cac48"/><path d="m16.754 28.845c.035-.4.227-.732.436-1.063-.21-.087-.366-.26-.488-.453a3.235 3.235 0 0 1 -.26-.575c-.244-.732-.296-1.5-.366-2.248v-.453c-.087.07-.105.662-.105.75a17.37 17.37 0 0 1 -.314 2.353c-.052.314-.087.627-.28.906 0 .035 0 .07.017.122.314.924.4 1.865.453 2.824v.35c0 .418-.017.33.33.47.14.052.296.07.436.174.105 0 .122-.087.122-.157l-.052-.575v-1.604c-.017-.28.035-.558.07-.82z" fill="#c2bfbf"/></Svg>;
    const Express = <Svge xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="3.44em" height="1em"  preserveAspectRatio="xMidYMid meet" viewBox="-40 0 600 149"><path d="M3.332 115.629V58.648h71.144v-3.333H3.332V3.332h75.642V0H0v118.961h79.64v-3.332H3.333zm140.455-82.307l-29.49 38.821l-28.825-38.82H81.14l31.157 41.32L78.14 118.96h3.999l32.156-41.82l32.323 41.82h4.165l-34.322-44.319l31.323-41.32h-3.998zm16.994 114.963V94.97h.333c2 7.775 5.943 14.023 11.83 18.744c5.887 4.72 13.384 7.081 22.492 7.081c5.887 0 11.108-1.194 15.662-3.582s8.358-5.637 11.413-9.747c3.054-4.11 5.387-8.886 6.998-14.329c1.61-5.442 2.416-11.163 2.416-17.16c0-6.443-.834-12.386-2.5-17.828c-1.666-5.443-4.082-10.164-7.247-14.162c-3.166-3.999-6.998-7.11-11.497-9.33c-4.498-2.222-9.58-3.333-15.245-3.333c-4.332 0-8.358.639-12.079 1.916c-3.721 1.278-7.025 3.082-9.913 5.415a36.674 36.674 0 0 0-7.498 8.247c-2.11 3.166-3.721 6.637-4.832 10.414h-.333V33.322h-3.332v114.963h3.332zm34.655-30.657c-10.44 0-18.827-3.582-25.158-10.746c-6.331-7.164-9.497-17.467-9.497-30.907c0-5.554.778-10.83 2.333-15.828c1.555-4.998 3.804-9.386 6.747-13.162c2.944-3.777 6.582-6.776 10.913-8.997c4.332-2.222 9.22-3.333 14.662-3.333c5.554 0 10.414 1.111 14.579 3.333c4.165 2.221 7.609 5.248 10.33 9.08s4.776 8.22 6.165 13.162c1.388 4.943 2.082 10.191 2.082 15.745c0 4.999-.638 9.97-1.916 14.912c-1.277 4.943-3.249 9.386-5.915 13.33c-2.665 3.942-6.08 7.163-10.246 9.663c-4.166 2.499-9.192 3.748-15.079 3.748zm54.816 1.333V70.477c0-4.665.666-9.22 2-13.662c1.332-4.443 3.387-8.359 6.164-11.746c2.777-3.388 6.303-6.054 10.58-7.998c4.276-1.944 9.358-2.749 15.245-2.416v-3.332c-5.11-.11-9.58.444-13.412 1.666c-3.833 1.222-7.137 2.888-9.914 4.999c-2.777 2.11-4.998 4.581-6.664 7.414a33.15 33.15 0 0 0-3.666 9.08h-.333v-21.16h-3.332v85.64h3.332zm38.154-42.153h71.643c.223-5.887-.36-11.551-1.749-16.994c-1.388-5.443-3.61-10.275-6.664-14.495c-3.055-4.221-6.998-7.609-11.83-10.164c-4.832-2.555-10.58-3.832-17.244-3.832c-4.777 0-9.442 1-13.996 3c-4.554 1.999-8.553 4.914-11.996 8.746c-3.443 3.832-6.22 8.525-8.33 14.08c-2.11 5.553-3.166 11.884-3.166 18.993c0 6.331.722 12.246 2.166 17.744c1.444 5.498 3.665 10.275 6.664 14.329c3 4.054 6.86 7.192 11.58 9.413c4.72 2.222 10.413 3.277 17.078 3.166c9.774 0 17.994-2.75 24.658-8.247c6.665-5.499 10.608-13.246 11.83-23.243h-3.332c-1.444 9.442-5.138 16.523-11.08 21.243c-5.943 4.721-13.412 7.081-22.41 7.081c-6.109 0-11.274-1.055-15.495-3.165c-4.22-2.11-7.664-4.999-10.33-8.664c-2.665-3.666-4.637-7.97-5.914-12.913c-1.278-4.942-1.972-10.302-2.083-16.078zm68.311-3.332h-68.31c.332-5.998 1.443-11.385 3.331-16.161c1.889-4.777 4.36-8.859 7.415-12.246c3.054-3.388 6.609-5.97 10.663-7.748c4.054-1.777 8.414-2.666 13.079-2.666c5.554 0 10.44 1.028 14.662 3.083c4.22 2.055 7.747 4.86 10.58 8.414c2.832 3.554 4.97 7.692 6.414 12.412c1.444 4.721 2.166 9.692 2.166 14.912zm72.477-14.828h3.332c0-9.553-2.777-16.495-8.33-20.827c-5.555-4.332-13.108-6.498-22.66-6.498c-5.332 0-9.83.667-13.496 2c-3.665 1.332-6.664 3.054-8.997 5.164c-2.332 2.11-3.998 4.443-4.998 6.998c-1 2.555-1.5 4.999-1.5 7.331c0 4.665.833 8.386 2.5 11.163c1.666 2.777 4.276 4.943 7.83 6.498c2.444 1.11 5.22 2.11 8.331 3c3.11.888 6.72 1.832 10.83 2.831c3.665.89 7.275 1.778 10.83 2.666c3.554.889 6.692 2.083 9.413 3.582c2.722 1.5 4.943 3.416 6.665 5.749c1.721 2.332 2.582 5.387 2.582 9.163c0 3.666-.86 6.776-2.582 9.33a20.815 20.815 0 0 1-6.581 6.249c-2.666 1.61-5.638 2.776-8.914 3.498c-3.277.722-6.47 1.083-9.58 1.083c-10.108 0-17.856-2.249-23.243-6.747c-5.387-4.499-8.08-11.58-8.08-21.244h-3.333c0 10.775 2.916 18.661 8.747 23.66c5.832 4.998 14.468 7.497 25.909 7.497c3.665 0 7.358-.417 11.08-1.25c3.72-.833 7.053-2.193 9.996-4.082a22.592 22.592 0 0 0 7.164-7.33c1.833-3 2.75-6.665 2.75-10.997c0-4.11-.806-7.442-2.416-9.997c-1.611-2.554-3.721-4.665-6.332-6.331c-2.61-1.666-5.553-2.971-8.83-3.915a516.08 516.08 0 0 0-9.914-2.75a1726.675 1726.675 0 0 0-12.246-3.165c-3.498-.889-6.747-1.944-9.746-3.166c-2.888-1.222-5.193-2.971-6.915-5.248c-1.722-2.277-2.582-5.526-2.582-9.747c0-.777.222-2.166.666-4.165c.444-2 1.5-4.027 3.166-6.082c1.666-2.054 4.22-3.887 7.664-5.498c3.443-1.61 8.164-2.416 14.162-2.416c4.11 0 7.858.445 11.246 1.333c3.388.889 6.304 2.305 8.747 4.249c2.444 1.944 4.332 4.415 5.665 7.414c1.333 3 2 6.665 2 10.997zm77.141 0h3.332c0-9.553-2.776-16.495-8.33-20.827c-5.554-4.332-13.107-6.498-22.66-6.498c-5.331 0-9.83.667-13.495 2c-3.666 1.332-6.665 3.054-8.997 5.164c-2.333 2.11-3.999 4.443-4.999 6.998c-1 2.555-1.499 4.999-1.499 7.331c0 4.665.833 8.386 2.5 11.163c1.665 2.777 4.276 4.943 7.83 6.498c2.444 1.11 5.22 2.11 8.33 3c3.11.888 6.72 1.832 10.83 2.831c3.666.89 7.276 1.778 10.83 2.666c3.555.889 6.692 2.083 9.414 3.582c2.721 1.5 4.943 3.416 6.664 5.749c1.722 2.332 2.583 5.387 2.583 9.163c0 3.666-.861 6.776-2.583 9.33a20.815 20.815 0 0 1-6.58 6.249c-2.667 1.61-5.638 2.776-8.915 3.498c-3.276.722-6.47 1.083-9.58 1.083c-10.108 0-17.855-2.249-23.242-6.747c-5.388-4.499-8.081-11.58-8.081-21.244h-3.332c0 10.775 2.915 18.661 8.747 23.66c5.831 4.998 14.467 7.497 25.908 7.497c3.666 0 7.359-.417 11.08-1.25c3.72-.833 7.053-2.193 9.997-4.082a22.592 22.592 0 0 0 7.164-7.33c1.833-3 2.749-6.665 2.749-10.997c0-4.11-.805-7.442-2.416-9.997c-1.61-2.554-3.72-4.665-6.331-6.331c-2.61-1.666-5.554-2.971-8.83-3.915a516.071 516.071 0 0 0-9.914-2.75a1726.65 1726.65 0 0 0-12.246-3.165c-3.499-.889-6.748-1.944-9.747-3.166c-2.888-1.222-5.193-2.971-6.914-5.248c-1.722-2.277-2.583-5.526-2.583-9.747c0-.777.222-2.166.667-4.165c.444-2 1.5-4.027 3.165-6.082c1.666-2.054 4.221-3.887 7.664-5.498c3.444-1.61 8.164-2.416 14.163-2.416c4.11 0 7.858.445 11.246 1.333c3.388.889 6.303 2.305 8.747 4.249c2.444 1.944 4.332 4.415 5.665 7.414c1.333 3 2 6.665 2 10.997z" fill="#000000"/><rect x="0" y="0" width="512" height="149" fill="rgba(0, 0, 0, 0)" /></Svge>;
    const svgFirebase = <Img src={firebase}></Img>
    const DatoCMS = <Span className="iconify" data-icon="logos:datocms" data-inline="false"></Span>
    const svgGraphql = <Svg width="2222" height="2500" viewBox="0 0 256 288" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M152.576 32.963l59.146 34.15a25.819 25.819 0 0 1 5.818-4.604c12.266-7.052 27.912-2.865 35.037 9.402 7.052 12.267 2.865 27.912-9.402 35.037a25.698 25.698 0 0 1-6.831 2.72v68.325a25.7 25.7 0 0 1 6.758 2.702c12.34 7.125 16.527 22.771 9.402 35.038-7.052 12.266-22.771 16.453-35.038 9.402a25.464 25.464 0 0 1-6.34-5.147l-58.786 33.94a25.671 25.671 0 0 1 1.295 8.08c0 14.103-11.458 25.636-25.635 25.636-14.177 0-25.635-11.46-25.635-25.636 0-2.52.362-4.954 1.037-7.253l-59.13-34.14a25.824 25.824 0 0 1-5.738 4.52c-12.34 7.051-27.986 2.864-35.038-9.402-7.051-12.267-2.864-27.913 9.402-35.038a25.71 25.71 0 0 1 6.758-2.703v-68.324a25.698 25.698 0 0 1-6.831-2.72C.558 99.897-3.629 84.178 3.423 71.911c7.052-12.267 22.77-16.454 35.037-9.402a25.82 25.82 0 0 1 5.79 4.575l59.163-34.159a25.707 25.707 0 0 1-1.048-7.29C102.365 11.46 113.823 0 128 0c14.177 0 25.635 11.459 25.635 25.635 0 2.548-.37 5.007-1.059 7.328zm-6.162 10.522l59.287 34.23a25.599 25.599 0 0 0 2.437 19.831c3.609 6.278 9.488 10.44 16.013 12.062v68.41c-.333.081-.664.17-.993.264L145.725 44.17c.234-.224.464-.452.689-.684zm-36.123.7l-77.432 134.11a25.824 25.824 0 0 0-1.01-.27v-68.417c6.525-1.622 12.404-5.784 16.013-12.062a25.6 25.6 0 0 0 2.427-19.869l59.27-34.22c.239.247.483.49.732.727zm24.872 6.075l77.414 134.08a25.492 25.492 0 0 0-4.513 5.757 25.7 25.7 0 0 0-2.702 6.758H50.64a25.71 25.71 0 0 0-2.704-6.758 25.825 25.825 0 0 0-4.506-5.724l77.429-134.107A25.715 25.715 0 0 0 128 51.27c2.487 0 4.89-.352 7.163-1.01zm11.795 194.478l58.902-34.008a25.865 25.865 0 0 1-.473-1.682H50.607c-.082.333-.171.663-.266.992l59.19 34.175A25.558 25.558 0 0 1 128 236.373a25.564 25.564 0 0 1 18.958 8.365z" fill="#E535AB" fillRule="evenodd"/></Svg>;
    const styledComponents = <Svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em"  preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path d="M18.05 29.6c.042-.095.148-.161.225-.241c1.175-1.232 2.36-2.453 3.519-3.7A3.2 3.2 0 0 0 22.808 23a5.925 5.925 0 0 0-.143-.624c-.316.3-.61.573-.906.848c-.46.428-.918.858-1.382 1.281a1.931 1.931 0 0 1-2.148.419a1.973 1.973 0 0 1-1.29-1.75a1.04 1.04 0 0 0-.043-.146c-.353.3-.691.576-1.026.86l-6.963 5.9c-.048.041-.1.092-.145.132h9.283l-.014-.009c-.05-.035-.024-.219.019-.311z" fill="#ffcebf"/><path d="M8.337 29.6a1.239 1.239 0 0 1 .295-.276l9.636-8.175q.986-.837 1.963-1.683a.523.523 0 0 0 .182-.224a5.364 5.364 0 0 0 .065-2.069c-.1.07-.154.1-.2.149c-.789.706-1.574 1.418-2.367 2.12a1.762 1.762 0 0 1-2.048.329a1.889 1.889 0 0 1-1.08-1.807v-.324c-.145.106-.251.177-.35.257q-5.785 4.632-11.568 9.257c-.174.139-.382.449-.61.148s.119-.425.294-.565q6.165-4.947 12.336-9.885c.67-.537.714-.762.278-1.615l-.26.244c-.713.663-1.434 1.317-2.136 1.991a2.121 2.121 0 0 1-3.585-1.337c-.133.1-.248.173-.357.258l-6.1 4.728a1.485 1.485 0 0 1-.356.258a.446.446 0 0 1-.3-.015v8.561h6.256a.365.365 0 0 1 .012-.325z" fill="#ffcebf"/><path d="M25.237 2.423c-.17.557-.335 1.115-.484 1.678a1.688 1.688 0 0 0 .9 2.09a7.122 7.122 0 0 0 3.818.8V2.518a.73.73 0 0 1 .016-.294a.666.666 0 0 1 .105-.149h-4.359c.067.078.044.215.004.348z" fill="#ff6196"/><path d="M16.482 12.032a2.422 2.422 0 0 1-.5 1.376a22.671 22.671 0 0 1-3.726 3.792a1.442 1.442 0 0 1-1.684.2a1.393 1.393 0 0 1-.843-1.368a1.624 1.624 0 0 1 .417-.947a35.848 35.848 0 0 1 5.019-3.993a.71.71 0 0 1 .829-.034a1.041 1.041 0 0 1 .488.974z" fill="#ff87af"/><path d="M15.284 18.093a1.437 1.437 0 0 1 .448-1.2a38.336 38.336 0 0 1 4.87-3.813c.052-.033.1-.066.157-.1a.837.837 0 0 1 1.025.035a.861.861 0 0 1 .242.979a4.39 4.39 0 0 1-1.168 1.908a118.836 118.836 0 0 1-3.4 3.22a1.124 1.124 0 0 1-1.364.192a1.512 1.512 0 0 1-.81-1.221z" fill="#ff87af"/><path d="M22.5 18.754c-.28.3-.568.586-.837.893a1.89 1.89 0 0 0-.2.38c.148.044.321.16.441.119c.611-.205 1.207-.451 1.878-.71c-.146.336-.256.646-.411.93A12.189 12.189 0 0 1 21 23.238q-.532.513-1.105.981a1.484 1.484 0 0 1-2.415-.92a1.1 1.1 0 0 1 .238-.813a22.187 22.187 0 0 1 4.623-3.823a.193.193 0 0 1 .065-.013z" fill="#ff87af"/><path d="M24.794 14.771l1.711-7.6l1.2.281l-.619 1.881c-.578 1.75-1.163 3.5-1.727 5.252c-.11.324-.254.384-.565.186z" fill="#ff6196"/><path d="M22.862 19.241c.181-.691.361-1.33.513-1.976a4.468 4.468 0 0 1 .826-1.721c.243-.319.516-.192.795-.123c.258.063.323.252.334.5a2.845 2.845 0 0 1-.588 1.907a4.8 4.8 0 0 1-1.88 1.413z" fill="#ff6196"/><path d="M29.993 2.894a3.623 3.623 0 0 0-.017-.668a.291.291 0 0 0-.116-.151a.381.381 0 0 0-.152-.075c-.032-.006-.077.027-.12.074a.666.666 0 0 0-.105.149a.73.73 0 0 0-.016.294v4.472a7.122 7.122 0 0 1-3.818-.8a1.688 1.688 0 0 1-.9-2.09c.149-.563.314-1.121.484-1.678c.04-.133.063-.27 0-.348a.2.2 0 0 0-.135-.064a.3.3 0 0 0-.182.064a.434.434 0 0 0-.171.19c-.2.6-.376 1.206-.529 1.818a2.148 2.148 0 0 0-.046.737a2.339 2.339 0 0 0 1.542 2c.189.079.3.157.247.406c-.073.316-.144.632-.216.949q-.735 3.222-1.462 6.447a.483.483 0 0 1-.121.257a3.228 3.228 0 0 0-.791.92a4.8 4.8 0 0 0-.53 1.5a.981.981 0 0 1-.558.785c-.417.211-.8.484-1.263.768A12.639 12.639 0 0 0 21 17.179a1.062 1.062 0 0 1 .284-.96a4.75 4.75 0 0 0 1.258-2.194a1.294 1.294 0 0 0-1.208-1.7a1.7 1.7 0 0 0-.929.264a68.767 68.767 0 0 0-2.812 2.026c-.547.412-1.062.868-1.592 1.3a.418.418 0 0 1-.059-.081a.842.842 0 0 0-.059-.214c-.443-.684-.136-1.181.345-1.692A2.793 2.793 0 0 0 17 11.977a1.568 1.568 0 0 0-.327-1.026a1.459 1.459 0 0 0-.438-.363a1.337 1.337 0 0 0-1.517.162l-.279.2c-.637.456-1.282.9-1.895 1.388a64.278 64.278 0 0 0-2.626 2.214c-.4.353-.692.835-1.107 1.163c-2.164 1.709-4.351 3.387-6.53 5.076a1.022 1.022 0 0 0-.205.161a.164.164 0 0 0-.016.029c-.046.107-.085.284-.031.349a.141.141 0 0 0 .047.033a.446.446 0 0 0 .3.015a1.485 1.485 0 0 0 .356-.258l6.1-4.728c.109-.085.224-.162.357-.258a2.121 2.121 0 0 0 3.585 1.337c.7-.674 1.423-1.328 2.136-1.991l.26-.244c.436.853.392 1.078-.278 1.615q-6.176 4.942-12.343 9.886c-.175.14-.521.267-.294.565s.436-.009.61-.148q5.786-4.621 11.564-9.254c.1-.08.205-.151.35-.257v.324a1.889 1.889 0 0 0 1.08 1.807a1.762 1.762 0 0 0 2.048-.329c.793-.7 1.578-1.414 2.367-2.12c.05-.045.108-.079.2-.149a5.364 5.364 0 0 1-.065 2.069a.523.523 0 0 1-.182.224q-.978.845-1.963 1.683l-9.632 8.176a1.239 1.239 0 0 0-.295.276a.365.365 0 0 0-.012.321a.376.376 0 0 0 .32.063a.294.294 0 0 0 .116-.065c.05-.04.1-.091.145-.132l6.963-5.9c.335-.284.673-.564 1.026-.86a1.04 1.04 0 0 1 .043.146a1.973 1.973 0 0 0 1.29 1.75a1.931 1.931 0 0 0 2.148-.419c.464-.423.922-.853 1.382-1.281c.3-.275.59-.551.906-.848a5.925 5.925 0 0 1 .143.624a3.2 3.2 0 0 1-1.014 2.649c-1.159 1.248-2.344 2.469-3.519 3.7c-.077.08-.183.146-.225.241s-.069.281-.019.321l.014.009a.573.573 0 0 0 .338.051a.136.136 0 0 0 .081-.051c.028-.029.055-.065.082-.092c.952-.984 1.909-1.963 2.854-2.954a13.982 13.982 0 0 0 1.074-1.223a3.411 3.411 0 0 0 .61-3.616a.516.516 0 0 1 .074-.386c.065-.112.137-.221.211-.329a4.632 4.632 0 0 0 .587-1a7.547 7.547 0 0 1 1.339-2.4a2.792 2.792 0 0 0 .5-2.469a.988.988 0 0 1 0-.489c.506-1.567 1.027-3.129 1.543-4.692l.69-2.094l.213-.647c.454 0 .882-.009 1.308 0c.354.01.462-.156.458-.5c-.021-1.38-.013-2.759-.013-4.138zM12.256 17.2a1.442 1.442 0 0 1-1.684.2a1.393 1.393 0 0 1-.843-1.368a1.624 1.624 0 0 1 .417-.947a35.848 35.848 0 0 1 5.019-3.993a.852.852 0 0 1 .326-.14a.656.656 0 0 1 .238 0a.763.763 0 0 1 .265.106a1.041 1.041 0 0 1 .488.975a2.422 2.422 0 0 1-.5 1.376a22.671 22.671 0 0 1-3.726 3.791zm5.2 1.929a1.124 1.124 0 0 1-1.364.192a1.512 1.512 0 0 1-.81-1.224a1.437 1.437 0 0 1 .448-1.2a38.336 38.336 0 0 1 4.87-3.813c.052-.033.1-.066.157-.1a.837.837 0 0 1 1.025.035a.861.861 0 0 1 .242.979a4.39 4.39 0 0 1-1.168 1.908c-1.103 1.102-2.25 2.163-3.398 3.219zm5.911 1.241A12.189 12.189 0 0 1 21 23.238q-.532.513-1.105.981a1.484 1.484 0 0 1-2.415-.92a1.1 1.1 0 0 1 .238-.813a22.187 22.187 0 0 1 4.623-3.823a.193.193 0 0 1 .065-.013l.1.1c-.28.3-.568.586-.837.893a1.89 1.89 0 0 0-.2.38c.148.044.321.16.441.119c.483-.162.958-.35 1.467-.55l.411-.16c-.154.34-.264.65-.419.934zm1.373-2.535a4.363 4.363 0 0 1-1.373 1.152q-.247.138-.507.258c.178-.681.356-1.312.507-1.95l.006-.026a4.468 4.468 0 0 1 .826-1.721c.243-.319.516-.192.795-.123c.258.063.323.252.334.5a2.845 2.845 0 0 1-.586 1.906zm2.34-8.5c-.578 1.75-1.163 3.5-1.727 5.252c-.106.329-.25.389-.561.191l1.483-6.593l.228-1.012l1.2.281l-.241.731z" fill="#000"/><rect x="0" y="0" width="32" height="32" fill="rgba(0, 0, 0, 0)" /></Svg>
    const JWT = <Svg height="2500" viewBox=".4 .3 99.7 100" width="2500" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="m57.8 27.2-.1-26.9h-15l.1 26.9 7.5 10.3zm-15 46.1v27h15v-27l-7.5-10.3z" fill="#fff"/><path d="m57.8 73.3 15.8 21.8 12.1-8.8-15.8-21.8-12.1-3.9zm-15-46.1-15.9-21.8-12.1 8.8 15.8 21.8 12.2 3.9z" fill="#00f2e6"/><path d="m30.6 36-25.6-8.3-4.6 14.2 25.6 8.4 12.1-4zm31.8 18.2 7.5 10.3 25.6 8.3 4.6-14.2-25.6-8.3z" fill="#00b9f1"/><path d="m74.5 50.3 25.6-8.4-4.6-14.2-25.6 8.3-7.5 10.3zm-48.5 0-25.6 8.3 4.6 14.2 25.6-8.3 7.5-10.3z" fill="#d63aff"/><path d="m30.6 64.5-15.8 21.8 12.1 8.8 15.9-21.8v-12.7zm39.3-28.5 15.8-21.8-12.1-8.8-15.8 21.8v12.7z" fill="#fb015b"/></g></Svg>
    
    if (Arr.includes("html")) {
        let i = Arr.indexOf("html");
         Arr[i] = {icono: HTML, nombre: "HTML5"};
     };
    if (Arr.includes("css")) {
        let i = Arr.indexOf("css");
        Arr[i] = {icono: CSS, nombre: "CSS3"};
    };
    if (Arr.includes("jquery")) {
        let i = Arr.indexOf("jquery");
        Arr[i] = {icono: jQuery, nombre: "jQuery"};
    };
    if (Arr.includes("phonegap")) {
        let i = Arr.indexOf("phonegap");
        Arr[i] = {icono: Phonegap, nombre: "Phonegap"};
    };
    if (Arr.includes("js")) {
        let i = Arr.indexOf("js");
        Arr[i] = {icono: JS, nombre: "Javascript ES6"};
    };
    if (Arr.includes("react")) {
        let i = Arr.indexOf("react");
        Arr[i] = {icono: Reactjs, nombre: "React.js"};
    };
    if (Arr.includes("next")) {
        let i = Arr.indexOf("next");
        Arr[i] = {icono: Nextjs, nombre: "Next.js"};
    };
    if (Arr.includes("gatsby")) {
        let i = Arr.indexOf("gatsby");
        Arr[i] = {icono: Gatsbyjs, nombre: "Gatsby.js"};
    };
    if (Arr.includes("node")) {
        let i = Arr.indexOf("node");
        Arr[i] = {icono: Nodejs, nombre: "Node.js"};
    };
    if (Arr.includes("mongodb")) {
        let i = Arr.indexOf("mongodb");
         Arr[i] = {icono: MongoDB, nombre: "MongoDB"};
    };
    if (Arr.includes("express")) {
        let i = Arr.indexOf("express");
        Arr[i] = {icono: Express, nombre: "Express"};
    };
    if (Arr.includes("firebase")) {
        let i = Arr.indexOf("firebase");
        Arr[i] = {icono: svgFirebase, nombre: "Firebase"};
    };
    if (Arr.includes("datocms")) {
        let i = Arr.indexOf("datocms");
        Arr[i] = {icono: DatoCMS, nombre: "DatoCMS"};
    };
    if (Arr.includes("graphql")) {
        let i = Arr.indexOf("graphql");
        Arr[i] = {icono: svgGraphql, nombre: "GraphQl"};
    };
    if (Arr.includes("styledcomponents")) {
        let i = Arr.indexOf("styledcomponents");
        Arr[i] = {icono: styledComponents, nombre: "Styled Components"};
    };
    if (Arr.includes("jwt")) {
        let i = Arr.indexOf("jwt");
        Arr[i] = {icono: JWT, nombre: "Json Web Token"};
    };
};