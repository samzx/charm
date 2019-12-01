# Charm

<img src="https://res.cloudinary.com/xielabs/image/upload/v1575203463/Screen_Shot_2019-12-01_at_11.30.39_pm.png">

**Landing page template** build on top of Next JS. Write modular React code. Compiles into light weight static html files that loads blazingly fast.

## Configuration
You only need to edit configuration files under `./config`:
-  `./config/appConfig.js` for main configurations
- `./config/extras` for other extra features such as mailing list subscriptions, store button links and other call to actions.

## Devlopment
### Make sure you have yarn installed
```
brew install yarn
```
### Install dependencies
```
yarn install
```

### Serving locally
```
yarn dev
```

## Deploy
### Clean, build and export
```bash
rm -rf .next && yarn build && yarn export
```
### Upload files to server
- Change depending on your deploy strategy
```bash
scp -rp out/ sam@samxie.net:/home/sam/Code/landing
```
