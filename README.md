# Cloud-Native-Python
使用Flask作为Web框架来构建微服务

## 构建 REST API
### get version info(GET /api/v1/info)
curl http://localhost:5000/api/v1/info -v

### get all users(GET /api/v1/users)
curl http://localhost:5000/api/v1/users

### get user by id(GET /api/v1/users/[user_id])
curl http://localhost:5000/api/v1/users/1

### add(POST /api/v1/users)
curl -i -H "Content-Type: application/json" -X POST -d '{"username":"yyr", "email":"yyr123@qq.com", "password":"yyr", "name": "yuanyaru"}' http://localhost:5000/api/v1/users

### delete(DELETE /api/v1/users)
curl -i -H "Content-Type: application/json" -X delete -d '{"username":"yyr"}' http://localhost:5000/api/v1/users

### update(PUT /api/v1/users)
curl -i -H "Content-Type: application/json" -X put -d '{"password": "123"}' http://localhost:5000/api/v1/users/4

### get all tweets(GET /api/v2/tweets)
curl http://localhost:5000/api/v2/tweets -v

### add(POST /api/v2/tweets)
curl -i -H "Content-Type: application/json" -X POST -d '{"username":"tweet", "body":"tweet body"}' http://localhost:5000/api/v2/tweets

### get tweet by id(GET /api/v2/tweets/[id])
curl http://localhost:5000/api/v2/tweets/1

### 换成了国内的pip源
pip3 install -r requirements.txt -i http://pypi.douban.com/simple/ --trusted-host pypi.douban.com

## 测试
* curl
* 单元测试框架 --- nose