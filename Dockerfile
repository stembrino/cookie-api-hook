FROM node:21.1.0

WORKDIR /usr/cookie-hook

# Copy application files
COPY package.json ./
COPY yarn.lock ./
COPY tsconfig.json ./
COPY src ./src

# Install dependencies
RUN yarn install

# Build project
RUN yarn build
