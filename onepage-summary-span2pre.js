(function() {
    'use strict';

    const spanSummary = document.querySelector("#summaryBlock > div.sectionContent > span")
    const preSummary = document.createElement("pre")
    preSummary.style.margin = 0
    preSummary.textContent = spanSummary.textContent
    spanSummary.parentNode.replaceChild(preSummary, spanSummary)
})();