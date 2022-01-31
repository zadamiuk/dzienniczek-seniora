from rest_framework_simplejwt.backends import TokenBackend

# function returning request's author's id
def get_user_id(request):
    token = request.META.get('HTTP_AUTHORIZATION', " ").split(' ')[1]
    return TokenBackend(algorithm='HS256').decode(token, verify=False)['user_id']
