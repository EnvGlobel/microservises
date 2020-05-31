from django.db import models


class DashboardItem(models.Model):
    viz_state = models.CharField(
        max_length=100
    )
    layout = models.CharField(
        max_length=100
    )
    name = models.CharField(
        max_length=100
    )
