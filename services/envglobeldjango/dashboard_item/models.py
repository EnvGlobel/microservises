from django.db import models
from django.contrib.auth.models import User
from django_mysql.models import JSONField

def my_default():
    return {'foo': 'bar'}

class DashboardItem(models.Model):
    query = JSONField(default=my_default)
    xs = models.IntegerField(null=True)
    name = models.CharField(max_length=100)
    chart_type = models.CharField(max_length=100, null=True)
