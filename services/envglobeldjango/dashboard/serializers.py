from rest_framework import serializers
from dashboard.models import Dashboard

# Dashboard Serializer
class DashboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dashboard
        fields = ('id', 'item')
        read_only_fields = ['id']
        depth = 1
