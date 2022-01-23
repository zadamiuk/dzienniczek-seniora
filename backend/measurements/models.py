from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from users.models import CustomUser
from django.contrib.auth import get_user_model

class Measurement(models.Model):
    date = models.DateField(auto_now=True)
    user = models.ForeignKey(get_user_model(), related_name="users", on_delete=models.CASCADE, blank=False)

    objects = models.Manager()


class BloodPressure(Measurement):
    systolic = models.PositiveSmallIntegerField(blank=False, validators=[MinValueValidator(70), MaxValueValidator(190)])
    diastolic = models.PositiveSmallIntegerField(blank=False, validators=[MinValueValidator(40), MaxValueValidator(120)])
    pulse = models.PositiveSmallIntegerField(blank=False, validators=[MinValueValidator(30), MaxValueValidator(250)])

    def __str__(self):
        return  str(self.systolic) + ' / ' + str(self.diastolic) + ' pulse: ' + str(self.pulse)
         

class Sugar(Measurement):
    level = models.PositiveSmallIntegerField(blank=False, default=0, validators=[MinValueValidator(10), MaxValueValidator(300)])

    def __str__(self):
        return str(self.level)


class Weight(Measurement):
    weight_value = models.PositiveSmallIntegerField(blank=False, default=0, validators=[MinValueValidator(10), MaxValueValidator(300)])

    def __str__(self):
        return str(self.weight_value)