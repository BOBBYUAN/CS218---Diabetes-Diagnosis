#!/usr/bin/python3
# SJSU CS 218 Spring 2021 TEAM3

from sklearn import datasets
from sklearn import svm
from sklearn import metrics
import joblib
import pandas as pd
import numpy as np
from pandas import DataFrame


# Prepare Data for train and test
mapping = {'Yes': 1, 'No': 0, 'Male':1, 'Female':0, 'Positive':1, 'Negative':0}

original_datasets = pd.read_csv("diabetes_data_upload.csv")
datasets = original_datasets.applymap(lambda s: mapping.get(s) if s in mapping else s)

labels = pd.DataFrame(datasets["class"], columns=["class"])

nRow = datasets.shape[0]
nCol = datasets.shape[1]

test_nRow = int((nRow / 10) * 2)
train_nRow = nRow - test_nRow

no_class_datasets = datasets.iloc[:, :nCol-1]

train_data = no_class_datasets.iloc[:train_nRow,:]
train_label = labels.iloc[:train_nRow,:]
test_data = no_class_datasets.iloc[train_nRow:nRow,:]
test_label = labels.iloc[train_nRow:nRow,:]

tn_data_np = train_data.to_numpy()
tn_label_np = train_label.to_numpy()
tn_label_np = tn_label_np.ravel()
ts_data_np = test_data.to_numpy()
ts_label_np = test_label.to_numpy()
ts_label_np = ts_label_np.ravel()

#load model to use
filename = "diabetes_svm_model.pkl"

svm_model = joblib.load(filename)
result = svm_model.score(ts_data_np, ts_label_np)
print(result)

total_test_num = ts_data_np.shape[0]
correct_num = 0
#result = svm_model.predict(ts_data_np[0].reshape(1, -1))
for i in range(0, ts_data_np.shape[0]):
    result = svm_model.predict(ts_data_np[i].reshape(1, -1))
    if result == ts_label_np[i]:
        correct_num += 1
    #else:
    print(str(i) + ": " + str(ts_data_np[i].reshape(1, -1))+ " predict:" + str(result)+ " class:" + str(ts_label_np[i]))

print("accuracy rate:" + str(float(correct_num) / float(total_test_num)))
