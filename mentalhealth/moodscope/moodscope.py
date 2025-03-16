import requests
import json

url = 'https://moodscope.com/api/public/v2/login'
headers = {'Content-Type': 'application/json'}
data = {'email': 'your_email', 'password': 'your_password'}

response = requests.post(url, headers=headers, data=json.dumps(data))
access_token = response.json()['access_token']
