# Generated by Django 3.2.8 on 2022-01-20 21:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_remove_customuser_is_supervisor'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='measurement_hour',
            field=models.PositiveSmallIntegerField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='customuser',
            name='measurement_minutes',
            field=models.PositiveSmallIntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
