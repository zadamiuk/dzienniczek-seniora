from django.contrib import admin
from users.models import CustomUser
from django.contrib.auth.admin import UserAdmin
from django.forms import TextInput, Textarea, CharField
from django import forms
from django.db import models


class UserAdminConfig(UserAdmin):
    model = CustomUser
    search_fields = ('email', 'name')
    list_filter = ('email', 'name', 'is_active', 'is_staff', 'supervisor_id')
    ordering = ('-email',)
    list_display = ('email', 'id', 'name', 'is_active', 'is_staff', 'supervisor_id', 'measurement_hour', 'measurement_minutes')
    fieldsets = (
        (None, {'fields': ('email', 'name', 'supervisor_id', 'measurement_hour', 'measurement_minutes')}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
    )
    formfield_overrides = {
        models.TextField: {'widget': Textarea(attrs={'rows': 20, 'cols': 60})},
    }
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'name', 'password1', 'password2', 'is_active', 'is_staff')}
         ),
    )


admin.site.register(CustomUser, UserAdminConfig)