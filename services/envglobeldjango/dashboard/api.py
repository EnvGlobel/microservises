from dashboard.models import Dashboard
from rest_framework import viewsets, permissions
from .serializers import DashboardSerializer

# Dashboard Viewset
class DashboardViewset(viewsets.ModelViewSet):
    queryset = Dashboard.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = DashboardSerializer

    def get_queryset(self):
        return self.request.user.dashboards.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
