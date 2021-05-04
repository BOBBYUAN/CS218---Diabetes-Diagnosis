# SJSU CS 218 Spring 2021 TEAM3

import boto3
import botocore
from django.conf import settings

from sklearn import datasets
from sklearn import svm
from sklearn import metrics
import joblib
import pandas as pd
import numpy as np
from pandas import DataFrame
from datetime import datetime
from datetime import date

def generateResponse(status, message, predict):
    return_val = {}
    return_val['status'] = status
    return_val['message'] = message
    return_val['predict'] = predict
    return return_val

def diabetePredict(email):
    table_name = 'patient'
    try:
        dynamodb = boto3.resource('dynamodb')
        table = dynamodb.Table(table_name)

        response = table.get_item(
            Key={
                'email': email
            }
        )

        if response.get('Item') == None:
            return generateResponse(400, "patient with email id {} is not found".format(email), -1)
        else:
            item = response['Item']
            features = []
            # [0]Age [1]Gender [2]Polyuria [3]Polydipsia [4]sudden weight loss [5]weakness [6]Polyphagia
            # [7]Genital thrush [8]visual blurring [9]Itching [10]Irritability [11]delayed healing
            # [12]partial paresis [13]muscle stiffness [14]Alopecia [15]Obesity
            
            # Column #0 Age
            if item.get("dob") == None:
                # picked age by default
                features.append(50)
            else:
                try:
                    dob_str = item["dob"]
                    dob_date = datetime.strptime(dob_str, "%Y-%m-%d").date()
                    #print (dob_date)
                    today = date.today()
                    #print(today)

                    diff = today - dob_date
                    year_ct = 365 * 24 *60 * 60

                    diff_year_precise = diff.total_seconds() / year_ct
                    diff_year = int(diff.total_seconds() / year_ct)
                    if ((diff_year_precise - diff_year) > 0.5):
                        year += 1

                    features.append(year)

                except ValueError as e:
                    return generateResponse(400, "Invalid dob format", -1)

            # Column #1 Gender
            if item.get("Gender") == None:
                features.append(0)
            else:
                features.append(item["Gender"]

            # Column #2 Polyuria
            if item.get("Polyuria") == None:
                features.append(0)
            else:
                features.append(item["Polyuria"])

            # Column #3 Polydipsia
            if item.get("Polydipsia") == None:
                features.append(0)
            else:
                features.append(item["Polydipsia"])

            # Column #4 Sudden weight loss
            if item.get("sudden weight loss") == None:
                features.append(0)
            else:
                features.append(item["sudden weight loss"])

            # Column #5 weakness
            if item.get("weakness") == None:
                features.append(0)
            else:
                features.append(item["weakness"])

            # Column #6 Polyphagia
            if item.get("Polyphagia") == None:
                features.append(0)
            else:
                features.append(item["Polyphagia"])

            # Column #7 Genital trush
            if item.get("Genital thrush") == None:
                features.append(0)
            else:
                features.append(item["Genital thrush"])

            # Column #8 visual blurring
            if item.get("visual blurring") == None:
                features.append(0)
            else:
                features.append(item["visual blurring"])

            # Column #9 Itching
            if item.get("Itching") == None:
                features.append(0)
            else:
                features.append(item["Itching"])

            # Column #10 Irritability
            if item.get("Irritability") == None:
                features.append(0)
            else:
                features.append(item["Irritability"])

            # Column #11 delayed healing
            if item.get("delayed healing") == None:
                features.append(0)
            else:
                features.append(item["delayed healing"])

            # Column #12 partial paresis 
            if item.get("partial paresis") == None:
                features.append(0)
            else:
                features.append(item["partial paresis"])

            # Column #13 muscle stiffness
            if item.get("muscle stiffness") == None:
                features.append(0)
            else:
                features.append(item["muscle stiffness"])

            # Column #14 Alopecia
            if item.get("Alopecia") == None:
                features.append(0)
            else:
                features.append(item["Alopecia"])

            # Column #15 Obesity
            if item.get("Obesity") == None:
                features.append(0)
            else:
                features.append(item["Obesity"])

            filename = "diabetes_svm_model.pkl"

            data = np.array(features)
            svm_model = joblib.load(filename)
            result = svm_model.predict(data.reshape(1, -1))

            return result

    except dynamodb.meta.client.exceptions.ResourceNotFoundException as err:
        return generateResponse(err.response['ResponseMetadata']['HTTPStatusCode'],
                                err.response['Error']['Message'],
                                -1)

result = diabetePredict("cs218@sjsu.edu")
print(result)
