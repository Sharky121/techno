$(document).ready(function() {
    var Nodes = {
        FORM: document.querySelector('.subscription-form'),
        FORM_BUTTON: document.querySelector('.subscription-button'),
        COLLAPSE_HEADER: document.querySelector('.collapse-header')
    };

    var onCheckboxChange = function (evt) {
        var target = evt.target;

        if (target && target.matches('#politic')) {
            var isChecked = target.checked;
            var activateBtn = Nodes.FORM_BUTTON[isChecked ? 'removeAttribute' : 'setAttribute']('disabled', 'disabled');
        }
    };

    var onCollapseHeaderClick = function (evt) {
        var target = evt.target;

        if (target && target.matches('.js-open-rules')) {
            evt.currentTarget.classList.toggle("collapse-header--active");
        }
    };

    Nodes.FORM.addEventListener('change', onCheckboxChange);
    Nodes.COLLAPSE_HEADER.addEventListener('click', onCollapseHeaderClick);
});
