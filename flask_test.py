#!/usr/bin/python3
# -- encoding:utf-8 --

from app import app
import unittest


class FlaskappTests(unittest.TestCase):
    def setUp(self):
        # creates a test client
        self.app = app.test_client()
        # propagate the exceptions to the test client
        self.app.testing = True

    def test_info_status_code(self):
        # sends HTTP GET request to the application
        result = self.app.get('/api/v1/info')
        # assert the status code of the response
        self.assertEqual(result.status_code, 200)

    def test_users_status_code(self):
        # sends HTTP GET request to the application
        result = self.app.get('/api/v1/users')
        # assert the status code of the response
        self.assertEqual(result.status_code, 200)

    def test_adduser_status_code(self):
        # sends HTTP GET request to the application
        result = self.app.post('/api/v1/users', data='{"username": "test_user","email": "test_email",'
                                                     '"password": "test_pwd"}', content_type='application/json')
        print(result)
        # assert the status code of the response
        self.assertEqual(result.status_code, 201)

    def test_upduser_status_code(self):
        # sends HTTP PUT request to the application
        result = self.app.put('/api/v1/users/8', data='{"password": "test_pwd_upd"}', content_type='application/json')
        print(result)
        # assert the status code of the response
        self.assertEqual(result.status_code, 200)

    def test_deluser_status_code(self):
        # sends HTTP DELETE request to the application
        result = self.app.delete('/api/v1/users', data='{"username": "cwt"}', content_type='application/json')
        # assert the status code of the response
        self.assertEqual(result.status_code, 200)

    def test_tweets_status_code(self):
        # sends HTTP GET request to the application
        result = self.app.get('/api/v2/tweets')
        # assert the status code of the response
        self.assertEqual(result.status_code, 200)

    def test_addtweets_status_code(self):
        # sends HTTP GET request to the application
        result = self.app.post('/api/v2/tweets', data='{"username": "yyr","body": "test_body"}',
                               content_type='application/json')
        # assert the status code of the response
        self.assertEqual(result.status_code, 200)

