require("jquery-match-height");
export default () => {
    $(function () {
        $('.case').matchHeight({
            byRow: true,
        });
    });
}