/*gets either an element or an element id*/
export function scrollToElement(target, extraOffset = 10) {
    const el =
        typeof target === "string"
            ? document.getElementById(target)
            : target;

    console.log(el);

    if (!el) return;

    const nav = document.getElementById("mynavbar");
    const navbarHeight = nav ? nav.offsetHeight : 0;

    const y =
        el.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight -
        extraOffset;

    window.scrollTo({
        top: y,
    });
}
