from rest_framework import routers
from .api import DashboardItemViewset

router = routers.DefaultRouter()
router.register('api/dashboard_item', DashboardItemViewset, 'dashboard_item')

urlpatterns = router.urls