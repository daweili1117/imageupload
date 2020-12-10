
from django.contrib import admin
from django.db import router
from django.urls import path ,include
from django.conf.urls import include, url
from rest_framework import routers


from . import views


urlpatterns = [
    path(r'', views.index, name='index'),

    path('person/<int:pk>/', views.PersonById.as_view()),
    path('person', views.PersonList.as_view()),
    # url(r'^person_json/', views.PersonList.as_view()),

    path('device/<int:pk>/', views.DeviceById.as_view()),
    path('device', views.DeviceList.as_view()),
    # url(r'^device_json/', views.DeviceList.as_view()),

    url(r'^crew_json', views.CrewList.as_view()),
    url(r'^crew_json/<int:pk>/', views.CrewById.as_view()),

    url(r'^role_json', views.RoleList.as_view()),
    url(r'^role_json/<int:pk>/', views.RoleById.as_view()),

    url(r'^timerange_json/', views.TimeRangeList.as_view()),
    url(r'^sensordatapoint_json/', views.SensorDataPointList.as_view()),
    url(r'^status_json/', views.StatusList.as_view()),
    url(r'^sensor_json/', views.SensorList.as_view()),

    path('heartrate_json/<int:pk>/', views.HeartRateById.as_view()),
    path('heartrate_json/', views.HeartRateList.as_view()),
    url(r'^bloodpressure_json/', views.BloodPressureList.as_view()),
    url(r'^heatindex_json/', views.HeatIndexList.as_view()),
    url(r'^spo2_json/', views.SpO2List.as_view()),
    # url(r'^personthreshold_json', views.PersonThresholdList.as_view()),
    # url(r'^deviceassignment_json', views.DeviceAssignmentList.as_view()),
    # path('personthreshold/<int:pk>/', views.PersonThresholdById.as_view()),
    # url(r'^personthreshold/(?P<PersonID>\d+)/', views.PersonThresholdById.as_view()),



]
