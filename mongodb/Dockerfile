# MongoDB Dockerfile
# Pull base image.
FROM centos:7
MAINTAINER yuanyr<398916756@qq.com>

# Install MongoDB.
RUN mkdir /data
RUN mkdir /data/mongo_data
VOLUME ["/data"]
ADD mongodb-3.0.7.tgz /data/

#添加全局变量
ENV PATH=$PATH:/data/mongodb-3.0.7/bin
WORKDIR /data/mongodb-3.0.7/bin
COPY mongo.conf .
EXPOSE 27017
CMD ["mongod", "-f", "mongo.conf"]
