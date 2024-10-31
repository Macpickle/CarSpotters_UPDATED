from django.contrib import admin
from .models import Post, Search

class PostAdmin(admin.ModelAdmin):
    list_display = ('username', 'photo', 'caption', 'post_image', 'likes', 'comments', 'timestamp')

class SearchAdmin(admin.ModelAdmin):
    list_display = ('search')

admin.site.register(Post)
admin.site.register(Search)
