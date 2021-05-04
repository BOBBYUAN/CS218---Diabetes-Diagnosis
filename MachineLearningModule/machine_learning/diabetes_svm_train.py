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
pd.set_option('display.max_columns', None)
print(original_datasets)

labels = pd.DataFrame(datasets["class"], columns=["class"])
print(labels)

nRow = datasets.shape[0]
nCol = datasets.shape[1]

test_nRow = int((nRow / 10) * 2)
train_nRow = nRow - test_nRow

print(test_nRow, train_nRow)
no_class_datasets = datasets.iloc[:, :nCol-1]

pd.set_option('display.max_columns', None)
print(no_class_datasets)

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
print(tn_data_np);print('\n');
print(tn_label_np);print('\n');
print(ts_data_np);print('\n');
print(ts_label_np);print('\n');

#set up for training 

clf = svm.SVC(kernel='linear')
clf.fit(tn_data_np, tn_label_np)

y_pred = clf.predict(ts_data_np)

print(y_pred)
print("Accuracy:", metrics.accuracy_score(ts_label_np, y_pred))
print("Recall:", metrics.recall_score(ts_label_np, y_pred))

model_file = "diabetes_svm_model.pkl"
joblib.dump(clf, model_file)


