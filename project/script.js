function toggleChevron(button) {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", !isExpanded);
}
