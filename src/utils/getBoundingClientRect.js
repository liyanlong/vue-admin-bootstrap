import $ from 'jquery'
export default (element) => {
    let ret = {
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0
    };
    if (element.getBoundingClientRect) {
        return $.extend(ret, element.getBoundingClientRect());
    }
}
