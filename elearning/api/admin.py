from django.contrib import admin
from api.models import Event, Program, Registration

# Register your models here.
class EventAdmin(admin.ModelAdmin):
    list_display = ('name', 'description','image')
    search_fields = ('name', 'description')
    list_filter = ('name', 'description')
    fields = ('name', 'description','image','program')
admin.site.register(Event, EventAdmin)
admin.site.register(Program)
admin.site.register(Registration)