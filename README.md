# Banuba SDK Web AR demo app

## Requirements

- Banuba [client token](#obtaining-banuba-client-token)
- [Nodejs](https://nodejs.org/en/) installed
- Browser with support of [WebGL 2.0](https://caniuse.com/#feat=webgl2)

### Obtaining Banuba SDK Web AR

The example uses CDN version of the [@banuba/webar](https://www.npmjs.com/package/@banuba/webar) npm package for simplicity.
Please use the npm package mentioned above for real world projects.
Check out the [Integration tutorials](https://docs.banuba.com/face-ar-sdk-v1/web/web_tutorials_integrations) for more ways of consuming [@banuba/webar](https://www.npmjs.com/package/@banuba/webar) package.

### Obtaining Banuba Client token

Banuba Client token is required to get Banuba SDK Web AR working.

To receive a new **trial** client token please fill in the [form on banuba.com](https://www.banuba.com/face-filters-sdk) website, or contact us via [info@banuba.com](mailto:info@banuba.com).

## Environment setup and local run

Clone the repository

```sh
git clone git@github.com:Banuba/quickstart-web.git
```

Insert Banuba [client token](#obtaining-banuba-client-token) into `BanubaClientToken.js`

```js
window.BANUBA_CLIENT_TOKEN = "PUT YOUR CLIENT TOKEN HERE";
```

Run the live server in the cloned folder

```sh
npx live-server
```

Open [localhost:8080](http://localhost:8080)

## Adding a new effect

Put effect zip file to `import/` folder and add zip file name to `./import/effectsList.js` file.
Example:

```js
export const importedEffectsList = ["your_effect_1.zip", "your_effect_2.zip"];
```

You can obtain more effects on the [Demo Face Filters](https://docs.banuba.com/face-ar-sdk-v1/overview/demo_face_filters) page.

---

Learn more about Banuba WebAR SDK on the [Web](https://docs.banuba.com/face-ar-sdk-v1/web/web_overview) section of [docs.banuba.com](https://docs.banuba.com).
