# Generated by Django 3.2.8 on 2022-01-02 20:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customuser',
            name='is_supervisor',
        ),
    ]
