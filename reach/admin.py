from django.contrib import admin

from .models import Person, Crew, Role, Device, TimeRange, SensorDataPoint, Status, Sensor, HeartRate, BloodPressure, HeatIndex, SpO2


class personHeartRate(admin.TabularInline):
    model = Person
    extra = 1


class personBloodPressure(admin.TabularInline):
    model = Person
    extra = 1


class personHeat(admin.TabularInline):
    model = Person
    extra = 1


class personSpO2(admin.TabularInline):
    model = Person
    extra = 1


class PersonAdmin(admin.ModelAdmin):
    list_display = ['PersonID', 'CrewID', 'FirstName', 'LastName', 'RoleID', 'ImageUrl',

                    # 'HRIndex', 'BPIndex', 'SpO2Index', 'HIIndex',
                    'HeartRateID', 'SpO2ID', 'BloodPressureID', 'HeatIndexID',
                    'LastActive']
    search_fields = ['FirstName', 'LastActive']


class CrewAdmin(admin.ModelAdmin):
    list_display = ['Name', 'Description', 'Status']
    search_fields = ['Name', 'Status']

class RoleAdmin(admin.ModelAdmin):
    list_display = ['Name', 'Description', 'Status']
    search_fields = ['Name', 'Status']


class DeviceAdmin(admin.ModelAdmin):
    list_display = ['DevicePK', 'PersonID', 'IP', 'Description', 'DeviceID', 'Type', 'Status', 'BatteryStatus']
    search_fields = ['DevicePK', 'PersonID', 'IP', 'Description', 'DeviceID', 'Type', 'Status', 'BatteryStatus']


class TimeRangeAdmin(admin.ModelAdmin):
    list_display = ['PersonID', 'StartTimestamp', 'EndTimestamp']


class SensorDataPointAdmin(admin.ModelAdmin):
    list_display = ['SensorDataPointID', 'PersonID', 'DateTimestamp', 'Value']


class StatusAdmin(admin.ModelAdmin):
    list_display = ['DeviceID', 'PowerStatus', 'DateTimestamp', 'BatteryStatus', 'SignalStrength']


class SensorAdmin(admin.ModelAdmin):
    list_display = ['Type', 'DeviceID']


class HeartRateAdmin(admin.ModelAdmin):
    inlines = [personHeartRate]
    list_display = ['HRIndex', 'AgeGroup', 'LowCritical', 'LowTargetHR', 'HighTargetHR', 'HighCritical']


class BloodPressureAdmin(admin.ModelAdmin):
    inlines = [personBloodPressure]
    list_display = ['BPIndex', 'LowMAP', 'NormalLowMAP', 'NormalHighMAP', 'HighMAP', 'BPIndex']
    # 'AgeGroup',


class HeatIndexAdmin(admin.ModelAdmin):
    inlines = [personHeat]
    list_display = ['HIIndex', 'ModerateRisk', 'HighRisk']


class SpO2Admin(admin.ModelAdmin):
    inlines = [personSpO2]
    list_display = ['SpO2Index', 'Low', 'Normal']


# class DeviceAssignmentAdmin(admin.ModelAdmin):
#     list_display = ['ImageUrl', 'FirstName', 'LastName', 'AssignedDeviceID', 'Description', 'IsAssigned']


# class PersonThresholdAdmin(admin.ModelAdmin):
#     List_display = ['PersonID', 'HeartRateID', 'SpO2ID', 'BloodPressureID', 'HeatIndexID']

admin.site.register(Person, PersonAdmin)
admin.site.register(Crew, CrewAdmin)
admin.site.register(Role, RoleAdmin)
admin.site.register(Device, DeviceAdmin)
admin.site.register(TimeRange, TimeRangeAdmin)
admin.site.register(SensorDataPoint, SensorDataPointAdmin)
admin.site.register(Status, StatusAdmin)
admin.site.register(Sensor, SensorAdmin)
admin.site.register(HeartRate, HeartRateAdmin)
admin.site.register(BloodPressure, BloodPressureAdmin)
admin.site.register(HeatIndex, HeatIndexAdmin)
admin.site.register(SpO2, SpO2Admin)
# admin.site.register(DeviceAssignment, DeviceAssignmentAdmin)
# admin.site.register(PersonThreshold, PersonThresholdAdmin)
