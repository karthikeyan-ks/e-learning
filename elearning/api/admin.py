from django.contrib import admin
from api.models import Event

# Register your models here.
class EventAdmin(admin.ModelAdmin):
    list_display = ('name', 'description','image')
    search_fields = ('name', 'description')
    list_filter = ('name', 'description')
    fields = ('name', 'description','image')
admin.site.register(Event, EventAdmin)