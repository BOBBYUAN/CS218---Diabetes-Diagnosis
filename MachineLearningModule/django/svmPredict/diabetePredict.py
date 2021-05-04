# SJSU CS 218 Spring 2021 TEAM3

from django.conf import settings
from sklearn import datasets
from sklearn import svm
from sklearn import metrics
import joblib
import pandas as pd
import numpy as np
from pandas import DataFrame

import os
from django.conf import settings

def generateResponse(status, message, predict):
    return_val = {}
    return_val['status'] = status
    return_val['message'] = message
    return_val['predict'] = predict
    return return_val

def diabetePredict(item):
    if type(item) is not dict:
        return generateResponse(400, "input parameter should be dict datatype", -1)

    features = []
    # [0]Age [1]Gender [2]Polyuria [3]Polydipsia [4]sudden weight loss [5]weakness [6]Polyphagia
    # [7]Genital thrush [8]visual blurring [9]Itching [10]Irritability [11]delayed healing
    # [12]partial paresis [13]muscle stiffness [14]Alopecia [15]Obesity
            
    # Column #0 Age
    if item.get("age") == None:
        features.append(50)
    else:
        features.append(item["age"])

    # Column #1 Gender
    if item.get("gender") == None:
        features.append(0)
    else:
        if item["gender"] == "male":
            features.append(1)
        elif item["gender"] == "female":
            features.append(0)
        elif item["gender"] == 0 or item["gender"] == 1:
            features.append(item["gender"])
        else:
            features.append(0)

    # Column #2 Polyuria
    if item.get("polyuria") == None:
        features.append(0)
    else:
        features.append(item["polyuria"])

    # Column #3 Polydipsia
    if item.get("polydipsia") == None:
        features.append(0)
    else:
        features.append(item["polydipsia"])

    # Column #4 Sudden weight loss
    if item.get("weight_loss") == None:
        features.append(0)
    else:
        features.append(item["weight_loss"])

    # Column #5 weakness
    if item.get("weakness") == None:
        features.append(0)
    else:
        features.append(item["weakness"])

    # Column #6 Polyphagia
    if item.get("polyphagia") == None:
        features.append(0)
    else:
        features.append(item["polyphagia"])

    # Column #7 Genital trush
    if item.get("genital_thrush") == None:
        features.append(0)
    else:
        features.append(item["genital_thrush"])

    # Column #8 visual blurring
    if item.get("visual_blurring") == None:
        features.append(0)
    else:
        features.append(item["visual_blurring"])

    # Column #9 Itching
    if item.get("itching") == None:
        features.append(0)
    else:
        features.append(item["itching"])

    # Column #10 Irritability
    if item.get("irritability") == None:
        features.append(0)
    else:
        features.append(item["irritability"])

    # Column #11 delayed healing
    if item.get("delayed_healing") == None:
        features.append(0)
    else:
        features.append(item["delayed_healing"])

    # Column #12 partial paresis 
    if item.get("partial_paresis") == None:
        features.append(0)
    else:
        features.append(item["partial_paresis"])

    # Column #13 muscle stiffness
    if item.get("muscle_stiffness") == None:
        features.append(0)
    else:
        features.append(item["muscle_stiffness"])

    # Column #14 Alopecia
    if item.get("alopecia") == None:
        features.append(0)
    else:
        features.append(item["alopecia"])

    # Column #15 Obesity
    if item.get("obesity") == None:
        features.append(0)
    else:
        features.append(item["obesity"])

    data = np.array(features)
    print(data)
    svm_model = joblib.load(os.path.join(settings.PROJECT_ROOT, settings.AI_MODEL))
    result = svm_model.predict(data.reshape(1, -1))

    return generateResponse(200, "", result[0])

#data1 = {}
#data = {"age": 48 ,"gender":"female","polyuria":1,"polydipsia":1,"weight_loss":1,"weakness":1,"polyphagia":1,"genital_thrush":0,"visual_blurring":0,"itching":1,"irritability":1,"delayed_healing":1,"partial_paresis":1,"muscle_stiffness":0,"alopecia":0,"obesity":0}
#result = diabetePredict(data)
#print(result)
