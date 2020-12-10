from rest_framework import serializers
from .models import *

#
# class PersonSerializer(serializers.ModelSerializer):
#
#     class Meta:
#             model = Person
#             #fields = ('PersonID','TeamID','FirstName','LastName','Role','ImageUrl','LastActive')
#             fields = '__all__'

class DeviceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Device
        #fields = ('DevicePK','DeviceID', 'IP', 'Description', 'Type', 'Status', 'BatteryStatus', 'isDelete')
        fields = '__all__'

class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = '__all__'

class CrewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Crew
        fields = '__all__'


class TimeRangeSerializer(serializers.ModelSerializer):
    class Meta:
        model = TimeRange
        fields = '__all__'


class SensorDataPointSerializer(serializers.ModelSerializer):
    class Meta:
        model = SensorDataPoint
        fields = '__all__'


class StatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Status
        fields = '__all__'


class SensorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sensor
        fields = '__all__'


class HeartRateSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeartRate
        fields = '__all__'


class BloodPressureSerializer(serializers.ModelSerializer):
    class Meta:
        model = BloodPressure
        fields = '__all__'


class HeatIndexSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeatIndex
        fields = '__all__'


class SpO2Serializer(serializers.ModelSerializer):
    class Meta:
        model = SpO2
        fields = '__all__'

#
# class DeviceAssignmentSerializer(serializers.ModelSerializer):
#
#         class Meta:
#                 model = DeviceAssignment
#                 fields = '__all__'

#
# class PersonThresholdSerializer(serializers.ModelSerializer):
#
#     # person_photo = serializers.CharField(source='PersonID.ImageUrl')
#     # person_isDelete = serializers.BooleanField(source='PersonID.isDelete')
#     # person_fname = serializers.CharField(source='PersonID.FirstName')
#     # person_lname = serializers.CharField(source='PersonID.LastName')
#     # person_role = serializers.CharField(source='PersonID.Role')
#     # person_lactive = serializers.CharField(source='PersonID.LastActive')
#     # person_tname = serializers.CharField(source='PersonID.TeamID.Name')
#     # person_hr = serializers.IntegerField(source='HeartRateID.HRIndex')
#     # person_hi = serializers.IntegerField(source='HeatIndexID.HIIndex')
#     # person_sp = serializers.IntegerField(source='SpO2ID.SpO2Index')
#     # person_bp = serializers.IntegerField(source='BloodPressureID.BPIndex')
#
#     class Meta:
#             model = PersonThreshold
#             fields = '__all__'


# class Meta:
#         model = PersonThreshold
#         fields = ('PersonID','person_photo','person_isDelete', 'person_fname', 'person_lname', 'person_role', 'person_lactive',
#                   'person_tname','person_hr','person_hi', 'person_sp','person_bp')


class PersonSerializer(serializers.ModelSerializer):
    # team_name = serializers.CharField(source='TeamID.Name')
    class Meta:
        model = Person
        fields = '__all__'
    #          # team_name = TeamSerializer(many=True)
    # # team_name = serializers.DictField(read_only=True , write_only=True)
    # class Meta:
    #         model = Person
    #         fields = ('PersonID','ImageUrl','FirstName','LastName','Role','LastActive','team_name')

    # # def create(self, validated_data):
    # #     return Person.objects.create(**validated_data)

    # #   team_name = serializers.CharField(source='TeamID.Name',read_only=True)
    # # class Meta:
    # #         model = Person
    # #         fields = ('PersonID','ImageUrl','FirstName','LastName','Role','LastActive','team_name')

    # def create(self, validated_data):
    #     team_name= validated_data.pop('team_name')
    #     person = Person.objects.create(**validated_data)
    #     for team in team_name:
    #         Team.objects.create(person=person,**person_data)
    #     return person
