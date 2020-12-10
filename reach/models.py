from django.db import models
from django.utils import timezone
from datetime import datetime
from django.contrib.auth.models import User


class Crew(models.Model):
    CrewID = models.AutoField(auto_created=True, primary_key=True)
    Name = models.CharField(max_length=51)
    Description = models.CharField(max_length=50)
    Status = models.BooleanField(default=True, blank=False, null=False)

    def __str__(self):
        return self.Name

    class Meta:
        verbose_name = 'Crew'
        verbose_name_plural = 'Crew'

class Role(models.Model):
    RoleID = models.AutoField(auto_created=True, primary_key=True)
    Name = models.CharField(max_length=51)
    Description = models.CharField(max_length=50)
    Status = models.BooleanField(default=True, blank=False, null=False)

    def __str__(self):
        return self.Name

    class Meta:
        verbose_name = 'Role'
        verbose_name_plural = 'Role'

# Role = (
#     ('SEMS Operator', "SEMS Operator"),
#     ('First Responder', "First Responder"),
#     ('Team Leader', "Team Leader"),
#     ('User', "User"),
#     ('Medic', "Medic")
# )

def upload_path(instance, filename):
    return '/'.join(['reach', str(instance.FirstName + instance.LastName), filename])

class Person(models.Model):
    # user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    PersonID = models.AutoField(auto_created=True, primary_key=True)
    CrewID = models.ForeignKey(Crew, blank=True, null=True, on_delete=models.SET_NULL)
    RoleID = models.ForeignKey(Role, blank=True, null=True, on_delete=models.SET_NULL)
    FirstName = models.CharField(max_length=50)
    LastName = models.CharField(max_length=50)
    HeartRateID = models.ForeignKey('HeartRate', blank=True, null=True, on_delete=models.SET_NULL)
    BloodPressureID = models.ForeignKey('BloodPressure', blank=True, null=True, on_delete=models.SET_NULL)
    HeatIndexID = models.ForeignKey('HeatIndex', blank=True, null=True, on_delete=models.SET_NULL)
    SpO2ID = models.ForeignKey('SpO2', blank=True, null=True, on_delete=models.SET_NULL)
    ImageUrl = models.ImageField(upload_to=upload_path, null=True)
    LastActive = models.DateTimeField(blank=True, null=True, auto_now_add= True)
    isDelete = models.BooleanField(default=True, blank=False, null=False)

    def __str__(self):
        return "%s %s" % (self.FirstName, self.LastName)

    class Meta:
        verbose_name = 'Person'
        verbose_name_plural = 'Person'


TYPES = (
    ('General', "General"),
    ('Type 1', "Type 1"),
    ('Type 2', "Type 2")
)
STATUS_CHOICES = (
        ('Available', 'Available'),
        ('Not Available', 'Not Available'),
        ('Under Repair', 'Under Repair'),
    )


class Device(models.Model):
    DevicePK = models.AutoField(auto_created=True, primary_key=True)
    PersonID = models.ForeignKey(Person, blank=True, null=True, on_delete=models.SET_NULL)
    # StatusID = models.OneToOneField('Status', blank=True, null=True, on_delete=models.SET_NULL)
    # Name = models.CharField(max_length=50)
    IP = models.GenericIPAddressField(max_length=50, null=False, unique=True)
    Description = models.CharField(max_length=50)

    DeviceID = models.CharField(max_length=100, unique=True)
    Type = models.CharField(max_length=50, choices=TYPES)
    Status = models.CharField(max_length=50, choices=STATUS_CHOICES)
    BatteryStatus = models.SmallIntegerField(blank=True, null=True)
    SignalStrength = models.SmallIntegerField(blank=True, null=True)
    # Status = models.BooleanField(default=True, blank=False, null=False)
    isDelete = models.BooleanField(default=True, blank=False, null=False)

    # LastActive = models.DateTimeField(blank=True,null=True, auto_now_add= True)

    # def __str__(self):
    #     return self.Name

    def __str__(self):
        return "%s" % self.DeviceID

    class Meta:
        verbose_name = 'Device'
        verbose_name_plural = 'Device'


class TimeRange(models.Model):
    TimeRangeID = models.AutoField(auto_created=True, primary_key=True)
    PersonID = models.ForeignKey(Person, blank=True, null=True, on_delete=models.SET_NULL)
    StartTimestamp = models.DurationField(blank=True, null=True)
    EndTimestamp = models.DurationField(blank=True, null=True)

    def __str__(self):
        return "%s" % self.PersonID

    class Meta:
        verbose_name = 'TimeRange'
        verbose_name_plural = 'Time Range'


class SensorDataPoint(models.Model):
    SensorDataPointID = models.AutoField(auto_created=True, primary_key=True,)
    PersonID = models.ForeignKey(Person, blank=True, null=True, on_delete=models.SET_NULL)
    SensorID = models.ForeignKey('Sensor', blank=True, null=True, on_delete=models.SET_NULL)
    DateTimestamp = models.DateTimeField(blank=True, null=True)
    Value = models.FloatField()

    @property
    def __str__(self):
        return"%s" % self.PersonID

    class Meta:
        verbose_name = 'SensorDataPoint'
        verbose_name_plural = 'Sensor Data Point'


class Status(models.Model):
    StatusID = models.AutoField(auto_created= True, primary_key=True)
    DeviceID = models.OneToOneField(Device, blank=True, null=True, on_delete=models.SET_NULL)
    PowerStatus = models.BooleanField(default=True, blank=False, null=False)
    DateTimestamp = models.TimeField(blank=True, null=True)
    BatteryStatus = models.SmallIntegerField(blank = True, null=True)
    SignalStrength = models.PositiveIntegerField(blank = True, null=True)

    def __str__(self):
        return "%s" % self.BatteryStatus

    class Meta:
        verbose_name = 'Status'
        verbose_name_plural = 'Status'


class Sensor(models.Model):
    SensorID = models.AutoField(auto_created=True, primary_key=True)
    Type = models.CharField(max_length=50)
    DeviceID = models.ForeignKey(Device, blank=True, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.Type

    class Meta:
        verbose_name = 'Sensor'
        verbose_name_plural = 'Sensor'


AgeGroup = (
        ('Select Age Group' , "Select Age Group"),
        ('18 - 20', "18 - 20"),
        ('21 - 30', "21 - 30"),
        ('31 - 40', "31 - 40"),
        ('41 - 50', "41 - 50"),
        ('51 - 60', "51 - 60"),
        ('61 - 70', "61 - 70")
)

Sex = (
    ('Select Sex', "Select Sex"),
    ('Male', "Male"),
    ('Female', "Female")
)


class HeartRate(models.Model):
    HeartRateID = models.AutoField(auto_created=True, primary_key=True)
    AgeGroup = models.CharField(max_length=50)
    # Sex = models.CharField(choices=Sex, default = "Select Sex", max_length=50)
    LowCritical = models.PositiveIntegerField(null=False, default=60)
    LowTargetHR = models.PositiveIntegerField(null=False, default=100)
    HighTargetHR = models.PositiveIntegerField(null=False, default=140)
    HighCritical = models.PositiveIntegerField(null=False, default=200)
    HRIndex = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return "%s" % self.HRIndex

    class Meta:
        verbose_name = 'HeartRate'
        verbose_name_plural = 'Heart Rate'


AgeGroup = (
        ('Select Age Group' , "Select Age Group"),
        ('18 - 29' , "18 - 29"),
        ('30 - 39' , "30 - 39"),
        ('40 - 49' , "40 - 49"),
        ('50 - 59' , "50 - 59"),
        ('60 - 69' , "60 - 69"),
        ('70 - 79' , "70 - 79")
)

Sex = (
    ('Select Sex' , "Select Sex"),
    ('Male' , "Male"),
    ('Female' , "Female")
)


class BloodPressure(models.Model):
    BloodPressureID = models.AutoField(auto_created=True, primary_key=True)
    # AgeGroup = models.CharField(choices=AgeGroup, default="Select Age Group", max_length=50)
    # Sex = models.CharField(choices=Sex, default="Select Sex", max_length= 50)
    # SystolicLowCritical = models.PositiveIntegerField(null = False, default=80)
    # DiastolicLowCritical = models.PositiveIntegerField(null = False, default=50)
    # ActiveSystolicLow = models.PositiveIntegerField(null = False, default=90)
    # ActiveDiastolicLow = models.PositiveIntegerField(null = False, default=60)
    # ActiveSystolicHigh= models.PositiveIntegerField(null = False, default=200)
    # ActiveDiastolicHigh = models.PositiveIntegerField(null = False, default=100)
    LowMAP = models.PositiveIntegerField(null=False, default=60)
    NormalLowMAP = models.PositiveIntegerField(null=False, default=70)
    NormalHighMAP = models.PositiveIntegerField(null = False, default=100)
    HighMAP = models.PositiveIntegerField(null = False, default=110)
    BPIndex = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return "%s" % self.BPIndex

    class Meta:
        verbose_name = 'BloodPressure'
        verbose_name_plural = 'Blood Pressure'


# Range = (
#         ('Select Heat Index Range' , "Select Heat Index Range"),
#         ('80 - 90' , "80 - 90"),
#         ('91 - 103' , "91 - 103"),
#         ('104 - 124' , "104 - 124"),
#         ('125 - 160' , "125 - 160"),
#
# )
#
#
# State = (
#     ('Select Status', "Select Status"),
#     ('Caution',"Caution"),
#     ('Extreme Caution', "Extreme Caution"),
#     ('Danger', "Danger"),
#     ('Extreme Danger', "Extreme Danger")
# )

class HeatIndex(models.Model):
    HeatIndexID = models.AutoField(auto_created=True, primary_key=True)
    # LowCritical = models.CharField(null=False, default='80 - 90', max_length=50)
    # Critical = models.CharField(null=False, default='91 - 103', max_length=50)
    # HighCritical = models.CharField(null=False, default='104 - 124', max_length=50)
    # ExtremeCritical = models.CharField(null=False, default='125 - 160', max_length=50)
    ModerateRisk = models.PositiveIntegerField(null = False, default=91)
    HighRisk = models.PositiveIntegerField(null = False, default=103)
    # Range = models.CharField(choices=Range, default="Select Heat Index Range", max_length=50)
    # State = models.CharField(choices=State, default="Select State", max_length=50)
    HIIndex = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return "%s" % self.HIIndex

    class Meta:
        verbose_name = 'HeatIndex'
        verbose_name_plural = 'Heat Index'

# class DeviceAssignment(models.Model):
#     ImageUrl = models.ImageField(upload_to='reach/', null=True)
#     FirstName = models.CharField(max_length=50)
#     LastName = models.CharField(max_length=50)
#     AssignedDeviceID = models.CharField(max_length=50, null=False)
#     Description = models.CharField(max_length=50)
#     IsAssigned = models.BooleanField(default=False, blank=False, null=False)
#
#     def __str__(self):
#         return "%s %s" % (self.FirstName, self.LastName)
#
#     class Meta:
#         verbose_name = 'DeviceAssignment'
#         verbose_name_plural = 'Device Assignment'


class SpO2(models.Model):
    SpO2ID = models.AutoField(auto_created=True, primary_key=True)
    # AgeGroup = models.CharField(max_length=50, default="18 - 79%")
    Low = models.PositiveIntegerField(null = False, default=90)
    Normal = models.PositiveIntegerField(null = False, default=95)
    SpO2Index = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return "%s" % self.SpO2Index

    class Meta:
        verbose_name = 'SpO2'
        verbose_name_plural = 'SpO2'



# class PersonThreshold(models.Model):
#     thresholdID= models.AutoField(auto_created= True, primary_key= True, max_length=16)
#     PersonID = models.ForeignKey(Person, blank=True, null=True, on_delete=models.SET_NULL, default='Not in Service')
#     # HeartRateIndex = models.ForeignKey(HeartRate, blank=True, null=True, on_delete=models.SET_NULL)
#     # SpO2Index = models.ForeignKey(SpO2, blank=True, null=True, on_delete=models.SET_NULL)
#     # BloodPressureIndex = models.ForeignKey(BloodPressure, blank=True, null=True, on_delete=models.SET_NULL)
#     # HeatIndexIndex = models.ForeignKey(HeatIndex, blank=True, null=True, on_delete=models.SET_NULL)
#
#     def __str__(self):
#         return "%s %s" % (self.PersonID, self.thresholdID)
#
#     class Meta:
#         verbose_name = 'PersonThreshold'
#         verbose_name_plural = 'Person Threshold'
#