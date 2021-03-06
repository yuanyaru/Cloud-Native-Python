1.配置yum源
```bash
cat > /etc/yum.repos.d/MongoDB.repo <<EOF
[mongodb-org-3.6]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/\$releasever/mongodb-org/3.6/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-3.6.asc
EOF
```
2.安装
```bash
yum -y install mongodb-org
```
3.创建数据目录
```bash
一般分配到独立的大分区
mkdir -p /data/mongodb/data /data/mongodb/logs
chown mongod.mongod /data/mongodb/data /data/mongodb/logs -R #默认是使用mongod执行的，所以需要修改一下目录权限
```
4.修改配置文件
```bash
vim /etc/mongod.conf
# mongod.conf
systemLog:
destination: file
logAppend: true
path: /data/mongodb/logs/mongod.log #修改到我们专门创建的目录

# Where and how to store data.
storage:
dbPath: /data/mongodb/data #修改到我们专门创建的目录
journal:
enabled: true

# network interfaces
net:
port: 27017
#bindIp: 127.0.0.1 # Listen to local interface only, comment to listen on all interfaces.
bindIp: 0.0.0.0 # Listen to local interface only, comment to listen on all interfaces. #修改监听所有的端口

#security:
# authorization: enabled #这里是开启验证功能，暂时先关闭，等创建完root用户再开起来进行验证
```
5.启动MongoDB
```bash
systemctl start mongod
```
6.连接MongoDB数据库
```bash
mongo 192.168.100.61:27017
```
7.创建验证用户
```bash
db.createUser({user:"root",pwd:"rootpassword",roles:[{role:"root",db:"admin"}]})
```
8.修改配置文件
```bash
security:

  authorization: enabled

添加上验证，重启mongd服务
systemctl restart mongod
```
9.登录验证
```bash
mongo -u root -p rootpassword --authenticationDatabase admin
```

