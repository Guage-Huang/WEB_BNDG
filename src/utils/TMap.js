export function TMap(key) {
    return new Promise(function (resolve, reject) {
        window.init = function () {
            resolve()//注意这里
        }
        var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = "";
            script.onerror = reject;
            document.head.appendChild(script);
        })
}