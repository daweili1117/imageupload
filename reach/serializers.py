from rest_framework import serializers
from .models import *

class Base64ImageField(serializers.ImageField):
    """
    A Django REST framework field for handling image-uploads through raw post data.
    It uses base64 for encoding and decoding the contents of the file.

    Heavily based on
    https://github.com/tomchristie/django-rest-framework/pull/1268

    Updated for Django REST framework 3.
    """

    def to_internal_value(self, data):
        from django.core.files.base import ContentFile
        import base64
        import six
        import uuid

        # Check if this is a base64 string
        if isinstance(data, six.string_types):
            # Check if the base64 string is in the "data:" format
            if 'data:' in data and ';base64,' in data:
                # Break out the header from the base64 content
                header, data = data.split(';base64,')

            # Try to decode the file. Return validation error if it fails.
            try:
                decoded_file = base64.b64decode(data)
            except TypeError:
                self.fail('invalid_image')

            # Generate file name:
            file_name = str(uuid.uuid4())[:12] # 12 characters are more than enough.
            # Get the file name extension:
            file_extension = self.get_file_extension(file_name, decoded_file)

            complete_file_name = "%s.%s" % (file_name, file_extension, )

            data = ContentFile(decoded_file, name=complete_file_name)

        return super(Base64ImageField, self).to_internal_value(data)

    def get_file_extension(self, file_name, decoded_file):
        import imghdr

        extension = imghdr.what(file_name, decoded_file)
        extension = "jpg" if extension == "jpeg" else extension

        return extension

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
    ImageUrl = Base64ImageField(
        max_length=None, use_url=True,
    )
    class Meta:
        model = Person
        fields = '__all__'
