
if(window.location.href == "https://moodle.maynoothuniversity.ie/login/index.php") {
    window.open("https://moodle.maynoothuniversity.ie/auth/oidc/", "_self");
}

if (window.location.href == "https://moodle.maynoothuniversity.ie/grade/report/overview/index.php?id=1&userid=0") {
    window.open("https://moodle.maynoothuniversity.ie/grade/report/overview/index.php", "_self");
}

console.log("Got here!");
