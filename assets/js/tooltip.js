document.addEventListener("DOMContentLoaded", function () {
  const tooltipElements = document.querySelectorAll('[data-bs-toggle="tooltip"]');

  tooltipElements.forEach(el => {
    new bootstrap.Tooltip(el, {
      trigger: 'hover focus'
    });
  });
});