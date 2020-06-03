# Cloud-Native-Python
使用Flask作为Web框架来构建微服务

## 构建 REST API
### get version info(GET /api/v1/info)
curl http://localhost:5000/api/v1/info

### get all users(GET /api/v1/users)
curl http://localhost:5000/api/v1/users

### get user by id(GET /api/v1/users/[user_id])
curl http://localhost:5000/api/v1/users/1

### add(POST /api/v1/users)
curl -i -H "Content-Type: application/json" -X POST -d '{"username":"yyr", "email":"yyr123@qq.com", "password":"yyr", "name": "yuanyaru"}' http://localhost:5000/api/v1/users

### delete(DELETE /api/v1/users)
curl -i -H "Content-Type: application/json" -X delete -d '{"username":"yyr"}' http://localhost:5000/api/v1/users

### 换成了国内的pip源
pip3 install -r requirements.txt -i http://pypi.douban.com/simple/ --trusted-host pypi.douban.com
