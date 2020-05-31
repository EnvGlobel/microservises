from django.db import models
from dashboard_item.models import DashboardItem
from django.contrib.auth.models import User

class Dashboard(models.Model):
    item = models.ManyToManyField(DashboardItem, blank=True)
    owner = models.ForeignKey(User, related_name='dashboards', on_delete=models.CASCADE, null=True)
