FROM node:16

# create root application folder
WORKDIR /app

# copy configs to /app folder
COPY package*.json ./
COPY tsconfig.json ./
# copy source code to /app/src folder
COPY src /app/src

# copy env
COPY .env /app

# check files list
RUN ls -a

RUN yarn install
RUN yarn run build

EXPOSE 3000

ENTRYPOINT [ "yarn" ]

CMD ["start"]



