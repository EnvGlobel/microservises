from django.db import models
from dashboard_item.models import DashboardItem

class Dashboard(models.Model):
    item = models.ManyToManyField(DashboardItem)
