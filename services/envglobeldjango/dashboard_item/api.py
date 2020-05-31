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
        dashboard = int(self.request.query_params.get('dashboard'))
        return self.request.user.dashboards.filter(id=dashboard)
