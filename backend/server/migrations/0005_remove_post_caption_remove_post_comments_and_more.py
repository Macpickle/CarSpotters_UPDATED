# Generated by Django 5.1.2 on 2024-10-22 13:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0004_post_post_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='caption',
        ),
        migrations.RemoveField(
            model_name='post',
            name='comments',
        ),
        migrations.RemoveField(
            model_name='post',
            name='likes',
        ),
        migrations.RemoveField(
            model_name='post',
            name='post_image',
        ),
        migrations.RemoveField(
            model_name='post',
            name='timestamp',
        ),
        migrations.AlterField(
            model_name='post',
            name='content',
            field=models.JSONField(default={'caption': models.CharField(max_length=100), 'comments': models.JSONField(), 'likes': models.IntegerField(default=0), 'post_image': models.ImageField(default='images/default.jpg', upload_to='images/'), 'timestamp': models.DateTimeField(auto_now_add=True)}),
        ),
    ]