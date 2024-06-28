from django.db import models
from django.contrib.auth.models import User

# class Profile(models.Model):
#     user = models.ForeignKey(User, on_delete=models.PROTECT, related_name='profile', unique=True)
#     date_of_birth = models.DateField()




#    class Meta :
#        ordering = ['-Profile']

#    def get_absolute_url(self):
#        return reverse('url', args=[args])

#    def __str__(self):
#        return self.field