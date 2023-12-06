from django.urls import  path
from.import views

urlpatterns=[
    path('',views.home, name='home'),
    path('r',views.register, name='r'),
    path('l',views.loginpage, name='l'),
    path('logout',views.logoutView, name='logout'),
    path('delete_task/<str:name>/', views.DeleteTask, name='delete'),
    path('update/<str:name>/',views.Update, name='update'),


]