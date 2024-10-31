from rest_framework import serializers
from .models import Post, Search

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = (
            'username',
            'photo',
            'caption',
            'post_image',
            'likes',
            'comments',
            'timestamp',
        )

class SearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Search
        fields = (
            'item',
        )