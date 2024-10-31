from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.http import JsonResponse

class AccountManager(BaseUserManager):
    # creates a new user
    def create_user(self, username, email, password=None):
        if not email:
            raise ValueError('Users must have an email')
        
        if not username:
            raise ValueError('Users must have a username')
        
        user = self.model(
            email=self.normalize_email(email),
            username=username,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user
    
    # creates a user with admin privileges
    def create_superuser(self, username, email, password=None):
        user = self.create_user(
            email=self.normalize_email(email),
            username=username,
            password=password,
        )
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

class Account(AbstractBaseUser):
    username = models.CharField(max_length=25)
    password = models.CharField(max_length=25)
    email = models.EmailField(unique=True)
    date = models.DateTimeField(auto_now_add=True)
    photo = models.ImageField(upload_to='images/', default='images/default.jpg')
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'password']

    objects = AccountManager()

    def __str__(self):
        return self.username
    
    def has_perm(self, perm, obj=None):
        return self.is_admin
    
    def has_module_perms(self, app_label):
        return True
    
class PostManager(BaseUserManager):
    def create_post(self, username, photo, content):
        post = self.model(
            username=username,
            photo=photo,
            content=content,
        )
        post.save(using=self._db)
        return post

class Post(AbstractBaseUser):
    username = models.CharField(max_length=25)
    photo = models.ImageField(upload_to='images/', default='images/default.jpg')
    caption = models.CharField(max_length=100)
    post_image = models.ImageField(upload_to='images/', default='images/default.jpg')
    likes = models.IntegerField(default=0)
    comments = models.JSONField()
    timestamp = models.DateTimeField(auto_now_add=True)
    id = models.AutoField(primary_key=True)

    def __str__(self):
        return self.username
    
class SearchManager(BaseUserManager):
    def create_search(self, searches):
        search = self.model(
            searches=searches,
        )
        search.save(using=self._db)
        return search
    
class Search(AbstractBaseUser):
    item = models.CharField(max_length=25)

    def __str__(self):
          return str(self.item) 