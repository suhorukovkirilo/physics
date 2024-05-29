var name_space = "physics"
var running_mode = "local";

function redirect(page="") {
    var domain = location.href.split("/" + name_space + "/")[0];
    var href = domain + "/" + name_space + "/" + page;
    if (running_mode !== "global") {
        if (page !== "") {
            href += "/index.html";
        } else {
            href += "index.html";
        }
    }
    href.replace("//", "/")
    location.href = href;
}
