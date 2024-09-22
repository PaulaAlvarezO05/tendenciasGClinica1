from rest_framework.routers import DefaultRouter
from ..appointments.views import *
from ..billing.views import *
from ..medicalRecords.views import *
from ..medicalSpecialties.views import *
from ..medicationInventory.views import *
from ..patients.views import *
from ..prescriptions.views import *
from ..roles.views import *
from ..users.views import *

router = DefaultRouter()

router.register(r'appointments', AppointmentViewset, basename='appointments')
#router.register(r'billing', billingViewset, basename='billing')
router.register(r'medicalRecords', MedicalRecordViewset, basename='medicalRecords')
#router.register(r'medicalSpecialties', EnrollmentViewset, basename='medicalSpecialties')
#router.register(r'medicationInventory', QuizViewset, basename='medicationInventory')
#router.register(r'patients', QuestionViewset, basename='patients')
router.register(r'prescriptions', PrescriptionViewset, basename='prescriptions')
router.register(r'roles', RolViewset, basename='roles')
router.register(r'users', UserViewset, basename='users')

urlpatterns = router.urls