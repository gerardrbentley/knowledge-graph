# build with npm
FROM node:lts-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM gatsbyjs/gatsby
COPY --from=build /app/public /pub
