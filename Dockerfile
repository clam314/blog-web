FROM node:15-alpine

LABEL MAINTAINER="woods"

ENV GIT_BRANCH master
# 创建一个工作目录
WORKDIR /app

# 替换alpine的更新源为国内源（当前为清华源）以及更新时区
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.tuna.tsinghua.edu.cn/g' /etc/apk/repositories \
  && apk update \
  && apk add bash tzdata \
  && cp -r -f /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
  && rm -rf /var/cache/apk/*

RUN apk add --no-cache bash git \
  && git clone -b $GIT_BRANCH --depth=1 https://github.com/clam314/blog-web.git /app

COPY .env /app

RUN yarn install --no-progress --registry=https://registry.npm.taobao.org \
  && yarn run build \
  && rm -rf api \
  && rm -rf assets \
  && rm -rf components \
  && rm -rf layouts \
  && rm -rf pages \
  && rm -rf plugins \
  && rm -rf store \
  && rm -rf utils

CMD [ "yarn", "start" ]
