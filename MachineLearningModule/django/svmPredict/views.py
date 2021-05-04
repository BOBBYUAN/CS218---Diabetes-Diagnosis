# SJSU CS 218 Spring 2021 TEAM3

from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from svmPredict import diabetePredict

@api_view(['POST'])
def DiabetesPredictDetail(request):
    #try:
        #diabetesPredict = DiabetesPredict.objects.get(email=pk)
    #dynamodb = boto3.resource('dynamodb')
    #table = dynamodb.Table('patient')
    #item = table.get_item(
    #    Key={
    #        'email': 'cs218@sjsu.edu',
    #    }
    #)
    #if 'gender' in 
    #item = response['Item']
    #email = item['username']
    #predict = int(item['gender'])
    #content = {'email':email,'predict':predict}

    #except DiabetesPredict.DoesNotExist:
        #return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'POST':
        data = request.data
        result = diabetePredict.diabetePredict(data)
        result_status = result.get('status')
        if result_status == 200:
            content = {'predict':result.get('predict')}
            return Response(content, status=status.HTTP_200_OK)
        else:
            content = {'predict':None}
            return Response(content, status=status.HTTP_400_BAD_REQUEST)

