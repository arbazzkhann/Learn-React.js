
// //old method
// function customRender(reactElement, mainContainer) {
//     const domElement = document.createElement(reactElement.type);
//     domElement.innerHTML = reactElement.children;
//     domElement.setAttribute('href', reactElement.props.href);
//     domElement.setAttribute('target', reactElement.props.target);

//     mainContainer.appendChild(domElement);    
// }




// //new method  / modular method
function customRender (reactElement, mainContainer) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    
    //(for in loop) for setting attributes
    for(let x in reactElement.props) {
        domElement.setAttribute(x, reactElement.props[x]);
    }

    mainContainer.appendChild(domElement);
}



//element
const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com/',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root');

//calling function
customRender(reactElement, mainContainer);