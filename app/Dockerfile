FROM python:3.7
MAINTAINER yuanyr<398916756@qq.com>

RUN mkdir /app
COPY cloud-native-app /app
COPY requirements.txt /app/
RUN pip install -r /app/requirements.txt
EXPOSE 5000
CMD cd /app/cloud-native-app && python3 app.py