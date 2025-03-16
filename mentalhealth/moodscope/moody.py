url = 'https://moodscope.com/api/public/v2/mood'
headers = {'Content-Type': 'application/json', 'Authorization': f'Bearer {access_token}'}

response = requests.get(url, headers=headers)
mood_data = response.json()
