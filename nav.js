const dropdownItems = Array.from(document.querySelectorAll('.navigation .dropdown'));
for (const item of dropdownItems) {
    const onClick = () => {
        item.classList.toggle('active');
    };
    item.addEventListener('click', onClick);
}
// This line selects all elements with the class .dropdown inside any element with the class .navigation. This allows for flexible navigation menus.
// This loop iterates over each dropdown item, defining an onClick function that toggles the class active on the clicked item. The event listener is added to each dropdown item to ensure the function is triggered upon clicking.