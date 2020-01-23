export class DjetlerApp {

    defaultEntityForm : HTMLElement|void;
    // fletPickr: FlatpickrFn|void;

    constructor() {

        document.addEventListener('DOMContentLoaded', () => {
            (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
                let $notification: any;
                $notification = $delete.parentNode;
                $delete.addEventListener('click', () => {
                    $notification.parentNode.removeChild($notification);
                });
            });
        });
        document.addEventListener('DOMContentLoaded', () => {

            // Get all "navbar-burger" elements
            const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

            // Check if there are any navbar burgers
            if ($navbarBurgers.length > 0) {

                // Add a click event on each of them
                $navbarBurgers.forEach(el => {
                    el.addEventListener('click', () => {

                        // Get the target from the "data-target" attribute
                        const target = el.dataset.target;
                        const $target = document.getElementById(target);

                        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                        el.classList.toggle('is-active');
                        // @ts-ignore
                        $target.classList.toggle('is-active');

                    });
                });
            }
        });

        let defaultEntityForm = document.getElementById("djetler-set-entity-form-input");
        if (defaultEntityForm) {
            this.defaultEntityForm = defaultEntityForm;
            this.defaultEntityForm.addEventListener("change", this.setDefaultEntity);
        }

    }

    public setDefaultEntity() {
        let defaultEntityForm = document.getElementById("djetler-set-entity-form");
        // @ts-ignore
        defaultEntityForm.submit();
    }
}
