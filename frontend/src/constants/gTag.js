
function insertTag() {
    const gID = import.meta.env.VITE_GID;
    if (gID) {
    
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${gID}`;
        document.head.appendChild(script);
        
    
        const script2 = document.createElement('script');
        script2.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gID}');
        `;
        document.head.appendChild(script2);
    
      } else {
        console.warn('Google Analytics ID is not defined in the environment variables.');
      }
    }


export default insertTag;