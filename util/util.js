const domUtils = {
    /**
     * Creates a DOM element
     * @param {*} o object containing properties of the html to be created
     * @param {*} children array of children to be added to the html
     * @param {*} createChildren if children should be created
     * @returns an html element
     */
    createElement: (o, children = [], createChildren = true) => {
        const customProperties = ['type', 'class'];
        const type = o.type || 'div';
        const el = document.createElement(type);

        // add all other properties
        for (const key of Object.keys(o)) {
            if (!customProperties.includes(key)) {
                el[key] = o[key];
            }
        }
        // add classes
        const classes = o.class.split(' ') || [];
        classes.forEach(c => el.classList.add(c));

        // add children
        children.forEach(child => el.appendChild((createChildren) ? domUtils.createElement(child) : child));
        return el;
    },
};

export default domUtils;
