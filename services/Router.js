// const Router = {
//     init: ()    => {
//         document.querySelectorAll('a.navlink').forEach((link) => {
//             link.addEventListener('click', (event) => {
//                 event.preventDefault();
//                 Router.go(event.target.href);
//             });
//         })
//     },
//     go: (path, addToHistory = true)  => {
//         console.log("PATHHH is ", path)
//     },
// }


const Router = {
    init: () => {
        document.querySelectorAll('a.navlink').forEach((link) => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                Router.go(event.target.getAttribute('href'));
            });
        })
        Router.go(location.pathname)
    },
    go: (path, addToHistory = true) => {
        console.log("PATHHH is ", path, addToHistory)
        if(addToHistory) {
            history.pushState({path}, '', path)
        }

        let pageContent = null;
        switch(path) {
            case '/':
                pageContent = document.createElement('h1')
                pageContent.textContent = 'Menu'
                console.log('Home Page')
                break;
            case '/order':
                pageContent = document.createElement('h1')
                pageContent.textContent = 'Your order'
                console.log('Order Page')
                break;
            
        }
        if(pageContent) {
        const cache = document.querySelector('main');
        cache.innerHTML = "";
        cache.appendChild(pageContent)
        window.scrollX = 0;
        window.scrollY = 0;
        }
    },
    
}
export default Router;