from dashboard_item.models import DashboardItem
from rest_framework import viewsets, permissions
from .serializers import DashboardItemSerializer

# DashboardItem Viewset
class DashboardItemViewset(viewsets.ModelViewSet):
    queryset = DashboardItem.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = DashboardItemSerializer

    def get_queryset(self):
        return self.request.user.dashboards.first().item

    def perform_create(self, serializer):
        dashboard_item = serializer.save()
        self.request.user.dashboards.first().item.add(dashboard_item)
        
