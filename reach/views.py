from django.shortcuts import render
from .models import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import *
from django.shortcuts import get_object_or_404
from django.http.response import Http404
import time
# Create your views here.

def index(request, path=''):
    """
    The home page. This renders the container for the single-page app.
    """
    request.num = int(round(time.time() * 1000))
    return render(request, 'index.html')

class PersonById(APIView):

    def get_object(self, pk):
        try:
            return Person.objects.get(pk=pk)
        except Person.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        person = self.get_object(pk)
        serializer = PersonSerializer(person)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        person = self.get_object(pk)
        serializer = PersonSerializer(person, data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        person = self.get_object(pk)
        person.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class PersonList(APIView):

    def get(self,request):
        person_json = Person.objects.all()
        serializer = PersonSerializer(person_json, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = PersonSerializer(data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DeviceById(APIView):

    def get_object(self, pk):
        try:
            return Device.objects.get(pk=pk)
        except Device.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        device = self.get_object(pk)
        serializer = PersonSerializer(device)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        device = self.get_object(pk)
        serializer = DeviceSerializer(device, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        device = self.get_object(pk)
        device.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class DeviceList(APIView):

    def get(self,request):
        device = Device.objects.all().order_by('DeviceID','DevicePK')
        serializer = DeviceSerializer(device, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = DeviceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CrewById(APIView):

    def get_object(self, pk):
        try:
            return Crew.objects.get(pk=pk)
        except Crew.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        crew = self.get_object(pk)
        serializer = CrewSerializer(crew)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        crew = self.get_object(pk)
        serializer = CrewSerializer(crew, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        crew = self.get_object(pk)
        crew.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class CrewList(APIView):

    def get(self,request):
        crew_json = Crew.objects.all()
        serializer = CrewSerializer(crew_json, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = CrewSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CrewById(APIView):

    def get_object(self, pk):
        try:
            return Crew.objects.get(pk=pk)
        except Crew.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        crew = self.get_object(pk)
        serializer = CrewSerializer(crew)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        crew = self.get_object(pk)
        serializer = CrewSerializer(crew, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        crew = self.get_object(pk)
        crew.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class RoleList(APIView):

    def get(self,request):
        role_json = Role.objects.all()
        serializer = RoleSerializer(role_json, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = RoleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RoleById(APIView):

    def get_object(self, pk):
        try:
            return Role.objects.get(pk=pk)
        except Role.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        role = self.get_object(pk)
        serializer = RoleSerializer(role)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        role = self.get_object(pk)
        serializer = RoleSerializer(role, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        role = self.get_object(pk)
        role.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



class TimeRangeById(APIView):

    def get_object(self, pk):
        try:
            return TimeRange.objects.get(pk=pk)
        except TimeRange.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        timeRange = self.get_object(pk)
        serializer = TimeRangeSerializer(timeRange)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        timeRange = self.get_object(pk)
        serializer = TimeRangeSerializer(timeRange, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        timeRange = self.get_object(pk)
        timeRange.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class TimeRangeList(APIView):

    def get(self,request):
        timeRange_json = TimeRange.objects.all()
        serializer = TimeRangeSerializer(timeRange_json, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = TimeRangeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SensorDataPointById(APIView):

    def get_object(self, pk):
        try:
            return SensorDataPoint.objects.get(pk=pk)
        except SensorDataPoint.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        sensordatapoint = self.get_object(pk)
        serializer = SensorDataPointSerializer(sensordatapoint)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        sensordatapoint = self.get_object(pk)
        serializer = SensorDataPointSerializer(sensordatapoint, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        sensordatapoint = self.get_object(pk)
        sensordatapoint.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class SensorDataPointList(APIView):

    def get(self,request):
        sensordatapoint_json = SensorDataPoint.objects.all()
        serializer = SensorDataPointSerializer(sensordatapoint_json, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = SensorDataPointSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class StatusById(APIView):

    def get_object(self, pk):
        try:
            return Status.objects.get(pk=pk)
        except Status.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        status = self.get_object(pk)
        serializer = StatusSerializer(status)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        status = self.get_object(pk)
        serializer = StatusSerializer(status, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        status = self.get_object(pk)
        status.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class StatusList(APIView):

    def get(self,request):
        status_json = Status.objects.all()
        serializer = StatusSerializer(status_json, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = StatusSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SensorById(APIView):

    def get_object(self, pk):
        try:
            return Sensor.objects.get(pk=pk)
        except Sensor.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        sensor = self.get_object(pk)
        serializer = SensorSerializer(sensor)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        sensor = self.get_object(pk)
        serializer = SensorSerializer(sensor, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        sensor = self.get_object(pk)
        sensor.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class SensorList(APIView):

    def get(self,request):
        sensor_json = Sensor.objects.all()
        serializer = SensorSerializer(sensor_json, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = SensorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class HeartRateById(APIView):

    def get_object(self, pk):
        try:
            return HeartRate.objects.get(pk=pk)
        except HeartRate.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        heartrate = self.get_object(pk)
        serializer = HeartRateSerializer(heartrate)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        heartrate = self.get_object(pk)
        serializer = HeartRateSerializer(heartrate, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        heartrate = self.get_object(pk)
        heartrate.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class HeartRateList(APIView):

    def get(self,request):
        heartrate_json = HeartRate.objects.all()
        serializer = HeartRateSerializer(heartrate_json, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = HeartRateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BloodPressureById(APIView):

    def get_object(self, pk):
        try:
            return BloodPressure.objects.get(pk=pk)
        except BloodPressure.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        bloodpressure = self.get_object(pk)
        serializer = BloodPressureSerializer(bloodpressure)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        bloodpressure = self.get_object(pk)
        serializer = BloodPressureSerializer(bloodpressure, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        bloodpressure = self.get_object(pk)
        bloodpressure.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class BloodPressureList(APIView):

    def get(self,request):
        bloodpressure_json = BloodPressure.objects.all()
        serializer = BloodPressureSerializer(bloodpressure_json, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = BloodPressureSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class HeatIndexById(APIView):

    def get_object(self, pk):
        try:
            return HeatIndex.objects.get(pk=pk)
        except HeatIndex.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        heatindex = self.get_object(pk)
        serializer = HeatIndexSerializer(heatindex)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        heatindex = self.get_object(pk)
        serializer = HeatIndexSerializer(heatindex, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        heatindex = self.get_object(pk)
        heatindex.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class HeatIndexList(APIView):

    def get(self,request):
        heatindex_json = HeatIndex.objects.all()
        serializer = HeatIndexSerializer(heatindex_json, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = HeatIndexSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class DeviceAssignmentById(APIView):
#
#     def get_object(self, pk):
#         try:
#             return DeviceAssignment.objects.get(pk=pk)
#         except DeviceAssignment.DoesNotExist:
#             raise Http404
#
#     def get(self, request, pk, format=None):
#         deviceassignment = self.get_object(pk)
#         serializer = DeviceAssignmentSerializer(deviceassignment)
#         return Response(serializer.data)
#
#     def put(self, request, pk, format=None):
#         deviceassignment = self.get_object(pk)
#         serializer = DeviceAssignmentSerializer(deviceassignment, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#     def delete(self, request, pk, format=None):
#         deviceassignment = self.get_object(pk)
#         deviceassignment.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)


# class DeviceAssignmentList(APIView):
#
#     def get(self,request):
#         deviceassignment_json = DeviceAssignment.objects.all()
#         serializer = DeviceAssignmentSerializer(deviceassignment_json, many=True)
#         return Response(serializer.data)
#
#     def post(self, request, format=None):
#         serializer = DeviceAssignmentSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SpO2ById(APIView):

    def get_object(self, pk):
        try:
            return SpO2.objects.get(pk=pk)
        except SpO2.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        spo2 = self.get_object(pk)
        serializer = SpO2Serializer(spo2)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        spo2 = self.get_object(pk)
        serializer = SpO2Serializer(spo2, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        spo2 = self.get_object(pk)
        spo2.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class SpO2List(APIView):

    def get(self,request):
        spo2_json = SpO2.objects.all()
        serializer = SpO2Serializer(spo2_json, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = SpO2Serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#
# class PersonThresholdById(APIView):
#
#     def get_object(self, pk):
#         try:
#             return PersonThreshold.objects.get(pk=pk)
#         except PersonThreshold.DoesNotExist:
#             raise Http404
#
#     def get(self, request, pk, format=None):
#         personthreshold = self.get_object(pk)
#         serializer = PersonThresholdSerializer(personthreshold)
#         return Response(serializer.data)
#
#     #  def put(self, request, *args, **kwargs):
#     #         queryset = PersonThreshold.objects.all()
#     #         person = self.kwargs.get('PersonID')
#     #         serializer = PersonThresholdSerializer(person, data=request.data)
#     #         if serializer.is_valid():
#     #             serializer.save()
#     #             return Response(serializer.data)
#     #         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#     # def put(self, request, pk, *args, **kwargs):
#     #     personthreshold = self.get_object(pk)
#     #     person = self.kwargs.get('PersonID')
#     #     xyz = queryset.filter(personthreshold)
#     #     serializer = PersonThresholdSerializer(xyz,person, data=request.data)
#     #     if serializer.is_valid():
#     #         serializer.save()
#     #         return Response(serializer.data)
#     #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#     def put(self, request, pk, format=None):
#         personthreshold = self.get_object(pk)
#         serializer = PersonThresholdSerializer(personthreshold, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#     def delete(self, request, pk, format=None):
#         personthreshold = self.get_object(pk)
#         personthreshold.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)
#
#
# class PersonThresholdList(APIView):
#
#     def get(self,request):
#         personthreshold_json = PersonThreshold.objects.all()
#         serializer = PersonThresholdSerializer(personthreshold_json, many=True)
#         return Response(serializer.data)
#
#     def post(self, request, format=None):
#         serializer = PersonThresholdSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)