# Generated by Django 5.1.2 on 2024-10-25 22:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0008_alter_post_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='Search',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('search', models.JSONField()),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
