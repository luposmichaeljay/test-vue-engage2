export const Engage = (options = { root: '#engage', items: [] }) => {
    if (!options.root) {
        throw new Error('Root is required.')
    }
    if (!options.items || (options.items && !options.items.length)) {
        throw new Error('Items is required.')
    }


    const root = document.querySelector(options.root)
    const list = document.createElement('ul')
    
    options.items.forEach(item => {
        const listItem = document.createElement('li')

        listItem.innerText = item

        list.appendChild(listItem)
    });

    root.append(list)
}