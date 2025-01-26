FROM node:16
WORKDIR /app
COPY . .
RUN npm install -g live-server
EXPOSE 3000
CMD ["live-server", "--port=3000"]
