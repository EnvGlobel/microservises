from rest_framework import serializers
from dashboard_item.models import DashboardItem

# DashboardItem Serializer
class DashboardItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = DashboardItem
        fields = '__all__'
        read_only_fields = ['id']
