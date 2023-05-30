
var fetchJson = "https://dungnguyendn189.github.io/data.json";

var urlParams = new URLSearchParams(window.location.search);

var sectionName = urlParams.get('section');
fetchJson = urlParams.get('name');

myUrlWithParams.searchParams.append("fetchJson","https://dungnguyendn189.github.io/data.json"); // tạo url có đui là 
var myParam = myUrlWithParams.href; // hiển thị full url
console.log(myParam);
var mygetParam = new URL(myParam).searchParams; // get cái prama từ cái json
console.log(mygetParam);
// fetchJson = mygetParam.get("fetchJson"); // gáng ngược lại cho fetch json cái api mới







fetch(fetchJson)
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("NETWORK RESPONSE ERROR");
        }
    })
    .then(data => {
        displayCocktail(data)
    })
    .catch((error) => console.error("FETCH ERROR:", error));

function displayCocktail(data) {
    const getApi = data.apiAPP[0];
    console.log(getApi.screenshot);
    var getInfoName = document.querySelector(".header-mini__info-name");
    getInfoName.innerHTML = `${getApi.name}`
    var getAvatarInfo = document.querySelector(".header-mini__info-avatar");
    getAvatarInfo.setAttribute("src", `${getApi.avatarapp}`);

    var getImageBackground = document.querySelector('.image-warp-header');
    getImageBackground.style.background = `linear-gradient(rgba(54, 59, 61, 0.8), rgba(54, 59, 61, 0.8)), url(${getApi.backgroundimage})`
    var getPhoneScreen = document.querySelector('.iphone-scree__my-screen');
    getPhoneScreen.setAttribute('src', `${getApi.screenshot}`);
    document.querySelector('.conntent-info__name').innerHTML = `${getApi.name}`;
    document.querySelector('.phone-info__content h2').innerHTML = `${getApi.description}`;
    document.querySelector('#header-mini__navigate__presskit').setAttribute('href',`${getApi.linkpresskit}`);
    document.querySelector('#header-mini__navigate__whatnews').setAttribute('href',`${getApi.linkwhatsnew}`);
    document.querySelector('#link-appstore').setAttribute('href',`${getApi.linkappstore}`);
    document.querySelector('.footer-content-link').setAttribute('href',`${getApi.profilelink}`);
    document.querySelector('.footer-massage-border').setAttribute('href',`${getApi.profilelink}`);
    document.querySelector('#footer-link__link-whatnew').setAttribute('href',`${getApi.linkwhatsnew}`);
    document.querySelector('#footer-link__link-press').setAttribute('href',`${getApi.linkpresskit}`);
    document.querySelector('#footer-link__link-policy').setAttribute('href',`${getApi.linkpolicy}`);
    document.querySelector('#content-header-1 h1').innerHTML = `${getApi.author1.title}`
    document.querySelector('#content-header-2 h1').innerHTML = `${getApi.author2.title}`
    document.querySelector('#content-header-3 h1').innerHTML = `${getApi.author3.title}`
    document.querySelector('#content-header-4 h1').innerHTML = `${getApi.author4.title}`
    document.querySelector('#content-header-5 h1').innerHTML = `${getApi.author5.title}`
    document.querySelector('#content-header-6 h1').innerHTML = `${getApi.author6.title}`
    document.querySelector('#content-header-7 h1').innerHTML = `${getApi.author7.title}`
    document.querySelector('#content-header-8 h1').innerHTML = `${getApi.author8.title}`
    document.querySelector('#content-header-9 h1').innerHTML = `${getApi.author9.title}`
    document.querySelector('#content-des-1 h2').innerHTML = `${getApi.author1.description}`
    document.querySelector('#content-des-2 h2').innerHTML = `${getApi.author2.description}`
    document.querySelector('#content-des-3 h2').innerHTML = `${getApi.author3.description}`
    document.querySelector('#content-des-4 h2').innerHTML = `${getApi.author4.description}`
    document.querySelector('#content-des-5 h2').innerHTML = `${getApi.author5.description}`
    document.querySelector('#content-des-6 h2').innerHTML = `${getApi.author6.description}`
    document.querySelector('#content-des-7 h2').innerHTML = `${getApi.author7.description}`
    document.querySelector('#content-des-8 h2').innerHTML = `${getApi.author8.description}`
    document.querySelector('#content-des-9 h2').innerHTML = `${getApi.author9.description}`











}