FROM node:15-alpine

LABEL MAINTAINER="woods"

ENV GIT_BRANCH master
ENV NODE_ENV=production
# 创建一个工作目录
WORKDIR /app

#COPY . .

# 替换alpine的更新源为国内源（当前为清华源）以及更新时区
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.tuna.tsinghua.edu.cn/g' /etc/apk/repositories \
  && apk update \
  && apk add bash tzdata \
  && cp -r -f /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
  && rm -rf /var/cache/apk/*

RUN apk add --no-cache bash git \
  && git clone -b $GIT_BRANCH --depth=1 https://github.com/clam314/blog-web.git /app \
  && cd /app \
  && rm -rf .git

COPY .env /app

# 设置第三方依赖包sharp的镜像地址
RUN  yarn install --no-progress --registry=https://registry.npm.taobao.org \
  && npm run build

EXPOSE 5000

CMD [ "npm", "start" ]
