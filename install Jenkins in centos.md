## 准备工作
1.首选需要安装JAVA环境

[https://github.com/yuanyaru/cassandra/blob/master/install%20java%20and%20run%20a%20java%20code%20in%20linux.txt](https://github.com/yuanyaru/cassandra/blob/master/install%20java%20and%20run%20a%20java%20code%20in%20linux.txt)

2.如果你的系统没有自带git，那么也需要安装一个
```bash
yum install git
git version
```
## 安装
```bash
wget http://pkg.jenkins-ci.org/redhat-stable/jenkins-2.7.3-1.1.noarch.rpm
rpm -ivh jenkins-2.7.3-1.1.noarch.rpm
```
## 配置
Jenkins默认运行在8080端口上，如果想运行在其他端口，需要更新配置文件。
```bash
vim /etc/sysconfig/jenkins
```
## 启动
```bash
service jenkins start/stop/restart
```

