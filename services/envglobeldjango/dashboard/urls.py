from rest_framework import routers
from .api import DashboardViewset

router = routers.DefaultRouter()
router.register('api/dashboard', DashboardViewset, 'dashboard')

urlpatterns = router.urls