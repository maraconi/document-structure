const hasTooltip = document.querySelectorAll('.has-tooltip');

function tooltip() {
    const tooltipActive = document.getElementsByClassName('tooltip_active')[0];
    event.preventDefault();
    if (tooltipActive !== undefined) {
    tooltipActive.classList.remove('tooltip_active');
        if (tooltipActive.textContent == this.title) {
            return false;
        }
    }
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip', 'tooltip_active');
    tooltip.textContent = this.getAttribute('title');
    const coordinates= this.getBoundingClientRect();
    tooltip.style.top = coordinates.bottom + 'px';
    tooltip.style.left = coordinates.left + 'px';
    document.body.append(tooltip);
}

for (i of hasTooltip) {
    i.addEventListener('click', tooltip);
}